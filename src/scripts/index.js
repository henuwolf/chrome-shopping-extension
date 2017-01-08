import Recognize from "./Recognize";
import setting from "../setting/setting";
import Capture from "../logic/Capture";

const state = {
    "webType": null
}

let recognizeInstance = null;

// chrome 事件监听 相关代码
//根据popup页面发出的消息进行回应
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command == "brush") {
    recognizeInstance.domToggle();
  }
  if (request.command == "buttonStatus") {
    sendResponse({brush: recognizeInstance.markingDomState});
  }
  if (request.command == "url_change") {
    recognizeInstance.domOperation.handleURLChange(request.url);

    setTimeout(() => {
        let webConfig = getWebConfig();

        if (!state.webType)
        {
            console.log("this webpage is not  a matched target webpage. ");
        }
        else
        {
            recognizeInstance.capture = new Capture({
                "webConfig": webConfig
            });;
            recognizeInstance.webConfig = webConfig;
            recognizeInstance._init();
        }
    }, 300);
  }
});


$(document).keydown((event) => {
    if (recognizeInstance)
    {
        if (event.shiftKey && event.ctrlKey && event.keyCode === 77)
        {
            recognizeInstance.domDetach();
        }

        if (event.shiftKey && event.ctrlKey && event.keyCode === 78)
        {
            recognizeInstance.domAttach();
        }
    }
});

$(document).ready(function() {
    setTimeout(() => {
        let webConfig = getWebConfig();

        if (!state.webType)
        {
            console.log("this webpage is not  a matched target webpage. ");
        }
        else
        {
            recognizeInstance = new Recognize({
                webConfig,
                state
            });

        }
    }, 300);
});

function getWebConfig() {
  let webConfig = null;
  for( let key in setting )
  {
      const dom = $( setting[key].identification );
      if (dom && dom.length === 1) {
          // dom 存在
          state.webType = key;
          webConfig = setting[key].webConfig;
          break;
      }
  }

  return webConfig;
}

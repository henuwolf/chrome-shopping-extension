## 工作进程
### shenqianqian
-

### lilonglong
- completed |__| and |--|
- 处理log和bug
- ocr截取精度解决下

### usage
#### download
- git clone https://github.com/shopping-plugin/chrome-shopping-extension.git
- npm install
- npm install -dev

#### develop
- git status 看自己有没有遗留的提交
- git pull origin master 更新自己的分支
- coding
- git add .
- git commit -m "content";
- if 其他人有提交 git pull origin master
- git push origin master

#### global setting 换电脑
- npm install -g webpack
- npm install -g less
- 安装node
- 安装 git
- 安装 atom
- atom plugins: platformio-ide-terminal emmet git-controll autocomplete-path autocomplete-module 

## 后续任务 11 10

## 流程
时间序列保存-> 无效子笔画排除 -> 物理分割和碰撞检测 -> 分割后的笔画识别 ->

### 单笔
- 错误单笔识别和去除
    - 现行方式：对于独立的单笔画，拆分现有笔迹的笔画作为自对比模型，若某笔画不符合这些对比模型则去除，避免干扰
    - 现行方式：对于组合中的单笔画，不太好判断。例如两个正确的笔迹因为用户多画一条线导致连接起来。

### 多笔
- 优化笔迹碰撞检测
- 优化笔迹排序组合方式：时间+笔画顺序 => 空间 来确定笔画分布
- 优化空间判定笔画组合图形的判定方式
    - 现在的方式：采用笔画最短距离和各笔迹辐射范围 * 辐射参数的相对大小来确定是否组合在一起。
-

### 回退机制
- 笔画的撤销

### 笔画和dom对应机制


## 11 15
### 未解决问题
#### 技术问题
- 小圈对应的title是一个a的title每个文字的位置很难确定
- 小圈的内边距如何确定
- 笔迹中心点计算需要优化
#### 网页问题
- 给定的DOM如何确定其对应的商品ID
- 网页DOM结构变化很大，分类搜索-关键字搜索-商品详情页面 现在只做了分类搜索，
### 已解决问题
- 网页延迟加载
- 网页动态加载的DOM更新
- DOM的定位
- DOM及祖先节点的返回
- DOM类型的标签化


###
- 屏幕分辨率
- 识别精度
- DOM-path + DOM tree
- dom label + dom path + 笔迹 前段需要
- dom树 + dom-path + 笔迹 后端需要
- title识别：ocr方法，需要笔迹+title字符串+截图
- 位置变化（自增自减), 数据点也要更新

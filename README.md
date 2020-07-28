### simpleAudio 是什么
--测试阶段！请勿下载--
DO NOT DOWNLOAD NOW PLEASE!!!

这是一款开源的超级简单的音频播放器。开箱即食！！

### 功能

1. 支持自定义音频外观
2. 支持自定义播放指针
3. 支持倍速播放
4. 进度条可调整

### 如何使用

```
npm i react-simple-audio
```

或者

```
yarn add react-simple-audio
```

### 使用文档
### PlayingButton

| 成员          |              说明               | 类型                                                      | 默认值     |
| ------------- | :-----------------------------: | :-------------------------------------------------------- | ---------- |
| src           |            音乐地址             | string                                                    |            |
| playing       |            播放状态             | boolean                                                   | false 暂停 |
| onPlay        |            播放函数             | function(time){}                                          | -          |
| onPause       |            暂停函数             | function(time){}                                          | -          |
| className     |            组件样式             | object                                                    | -          |
| iconClassName | icon 样式（调整默认 icon 样式） | object                                                    | -          |
| customIcon    |           自定义 icon           | object(ReactDOM){playIcon: ReactDOM, pauseIcon: ReactDOM} | -          | 




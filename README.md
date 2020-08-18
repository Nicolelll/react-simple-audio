### simpleAudio 是什么

这是一款基于 react 框架的开源的超级简单的音频播放器。开箱即食！！

### 功能

- [x] 支持自定义音频外观
- [x] 支持自定义播放指针
- [ ] 支持倍速播放
- [ ] 进度条可调整

### 如何使用

```
npm i react-simple-audio
```

或者

```
yarn add react-simple-audio
```

!!请确保您的 react 版本高于 16.8

[live demo](https://codesandbox.io/s/react-simple-audio-demo-ozjy1)

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

### BasicAudio

| 成员                |            说明             | 类型                      | 默认值 |
| ------------------- | :-------------------------: | :------------------------ | ------ |
| playButtonClassName |     播放按钮外边框样式      | string                    | -      |
| showTime            |        是否显示时间         | boolean                   | true   |
| audioInfo           | 音频信息 (名称、作者、图片) | object{name, author, img} | -      |

有所有 playingButton 的 Api

### Progress

| 成员        |       说明       | 类型            | 默认值     |
| ----------- | :--------------: | :-------------- | ---------- |
| showPointer | 是否显示进度指针 | boolean         | true(显示) |
| className   | 自定义进度条样式 | object          |            |
| pointer     | 自定义进度条指针 | object\ReactDOM |            |

### AudioTime

| 成员             |        说明        | 类型                                                   | 默认值 |
| ---------------- | :----------------: | :----------------------------------------------------- | ------ |
| className        |      组件样式      | object                                                 | -      |
| handleRenderTime | 自定义时间显示方式 | funtion(info: {currentTime, duration}) return ReactDOM | -      |

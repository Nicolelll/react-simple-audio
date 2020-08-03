### simpleAudio 是什么
这是一款开源的超级简单的音频播放器。开箱即食！！

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

```
import { PlayingButton, BasicAudio } from 'react-simple-audio'

<p1>playBtn</p1>
<PlayingButton 
  src={musicSrc} 
  onClick={togglePlayState} 
  playing={playing} 
  style={{background: `url(${imgSrc}) no-repeat center`, backgroundSize: 'cover'}}
/>
<p>basic audio</p>
<BasicAudio 
  src={musicSrc}         
  onClick={toggleBasePlay} 
  playing={basePlay} 
  audioInfo={{
    img: imgSrc,
    name: '给你看',
    author: '佛跳墙'
  }}
/>
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

### BasicAudio

| 成员      |         说明          | 类型         | 默认值      |
| --------- | :-------------------: | :----------- | ----------- |
| playButtonClassName       |       播放按钮外边框样式       | string       | -           |
| showTime       |       是否显示时间       | boolean       | true          |
| audioInfo       |       音频信息 (名称、作者、图片)      | object{name, author, img}       | -          |

有所有playingButton的Api

### Progress

| 成员        |       说明       | 类型            | 默认值     |
| ----------- | :--------------: | :-------------- | ---------- |
| showPointer | 是否显示进度指针 | boolean         | true(显示) |
| className   | 自定义进度条样式 | object          |            |
| pointer     | 自定义进度条指针 | object\ReactDOM |            |

### AudioTime

| 成员          |              说明               | 类型                                                      | 默认值     |
| ------------- | :-----------------------------: | :-------------------------------------------------------- | ---------- |
| className     |            组件样式             | object                                                    | -          |
| handleRenderTime | 自定义时间显示方式 | funtion(info: {currentTime, duration})  return ReactDOM                 | -          |





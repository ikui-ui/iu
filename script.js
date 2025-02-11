// 初始化 DPlayer
const dp = new DPlayer({
    container: document.getElementById('dplayer'), // 播放器容器
    autoplay: false, // 是否自动播放
    theme: '#FADFA3', // 主题色
    loop: false, // 是否循环播放
    lang: 'zh-cn', // 语言
    screenshot: true, // 是否允许截图
    hotkey: true, // 是否启用快捷键
    preload: 'auto', // 预加载模式
    volume: 0.7, // 初始音量
    mutex: true, // 互斥模式（避免多个播放器同时播放）
    video: {
        url: 'https://vjs.zencdn.net/v/oceans.mp4', // 视频地址
        pic: 'https://i.loli.net/2021/10/06/8z7Z1Xy6vKj3w9t.jpg', // 封面图片
    },
});
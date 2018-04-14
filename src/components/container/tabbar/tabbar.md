组件构成
tab-bar
  tab-bar与tab-bar-item通过mixin沟通
  currentIndex
tab-bar-item
  可选icon 右上角红点徽章（徽章文字可选）
     根据是否具有icon分为：simple Switch-icon两类
  描述
     文字通过prop传递或者slot传递，可选

  是否选中selected
  onItemClick或者link走路由

import TabNavigator from './TabNavigator';
import Creamra from '../pages/creamra';

import Gesture from '../pages/gestrue';
import RNF from '../pages/RNF';
import WebViewCom from '../pages/webview';
import SoundCom from '../pages/sound';

const router = [
  {
    name: 'Index', //跳转路径
    title: '首页', //头部展示标题
    component: TabNavigator,
    options: {
      headerShown: false,
    },
  },

  //下面只需要配置非tabbar页面路径
  {
    name: 'Creamra',
    title: '相册',
    component: Creamra,
    options: {
      headerShown: false,
      presentation: 'transparentModal',
      contentStyle: {
        backgroundColor: 'transparent',
      },
    },
  },

  {
    name: 'RNF',
    title: '文件',
    component: RNF,
    options: {
      headerShown: false,
      presentation: 'transparentModal',
      contentStyle: {
        backgroundColor: 'transparent',
      },
    },
  },

  {
    name: 'WebView',
    title: 'WebView',
    component: WebViewCom,
    options: {
      headerShown: false,
      presentation: 'transparentModal',
      contentStyle: {
        backgroundColor: 'transparent',
      },
    },
  },

  {
    name: 'Gesture',
    title: '手势',
    component: Gesture,
    options: {
      headerShown: false,
      presentation: 'transparentModal',
      contentStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
  {
    name: 'Sound',
    title: '音频',
    component: SoundCom,
    options: {
      headerShown: false,
      presentation: 'transparentModal',
      contentStyle: {
        backgroundColor: 'transparent',
      },
    },
  },
];

export default router;

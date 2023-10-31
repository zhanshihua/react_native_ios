import {Dimensions} from 'react-native';
//获取屏幕width
const deviceWidthDp = Dimensions.get('window').width;
//获取设计图宽度
const uiWidthPx = 750;
function setWidth(px: number) {
  return (px * deviceWidthDp) / uiWidthPx;
}
export default setWidth;

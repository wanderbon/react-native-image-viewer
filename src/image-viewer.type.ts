import * as React from 'react';
import { Image, ImageURISource, Text, View, ViewStyle } from 'react-native';
import { simpleStyle } from './image-viewer.style';

interface IOnMove {
  type: string;
  positionX: number;
  positionY: number;
  scale: number;
  zoomCurrentDistance: number;
}

export class Props {
  public show?: boolean = false;

  public imageUrls: IImageInfo[] = [];

  public flipThreshold?: number = 80;

  public maxOverflow?: number = 300;

  public index?: number = 0;

  public failImageSource?: IImageInfo = undefined;

  public backgroundColor?: string = 'black';

  public footerContainerStyle?: object = {};

  public menuContext?: any = { saveToLocal: 'save to the album', cancel: 'cancel' };

  public saveToLocalByLongPress?: boolean = true;

  public enableImageZoom?: boolean = true;

  public style?: ViewStyle = {};

  public enableSwipeDown?: boolean = false;

  public swipeDownThreshold?: number;

  public doubleClickInterval?: number;

  public minScale?: number;

  public maxScale?: number;

  public enablePreload?: boolean = false;

  public pageAnimateTime?: number = 100;

  public onLongPress?: (image?: IImageInfo) => void = () => {
    //
  };

  public onClick?: (close?: () => any, currentShowIndex?: number) => void = () => {
    //
  };

  public onDoubleClick?: (close?: () => any) => void = () => {
    //
  };

  public onSave?: (url: string) => void = () => {
    //
  };

  public onMove?: (position?: IOnMove) => void = () => {
    //
  };

  public renderHeader?: (currentIndex?: number) => React.ReactElement<any> = () => {
    return null as any;
  };

  public renderFooter?: (currentIndex: number) => React.ReactElement<any> = () => {
    return null as any;
  };

  public renderIndicator?: (currentIndex?: number, allSize?: number) => React.ReactElement<any> = (
    currentIndex?: number,
    allSize?: number
  ) => {
    return React.createElement(
      View,
      { style: simpleStyle.count },
      React.createElement(Text, { style: simpleStyle.countText }, currentIndex + '/' + allSize)
    );
  };

  public renderImage?: (props: any) => React.ReactElement<any> = (props: any) => {
    return React.createElement(Image, props);
  };

  public renderArrowLeft?: () => React.ReactElement<any> = () => {
    return null as any;
  };

  public renderArrowRight?: () => React.ReactElement<any> = () => {
    return null as any;
  };

  public onShowModal?: (content?: any) => void = () => {
    //
  };

  public onCancel?: () => void = () => {
    //
  };

  public onSwipeDown?: () => void = () => {
    //
  };

  public loadingRender?: () => React.ReactElement<any> = () => {
    return null as any;
  };

  public onSaveToCamera?: (index?: number) => void = () => {
    //
  };

  public onChange?: (index?: number) => void = () => {
    //
  };

  public menus?: ({ cancel, saveToLocal }: any) => React.ReactElement<any>;
}

export class State {
  public show?: boolean = false;

  public currentShowIndex?: number = 0;

  public prevIndexProp?: number = 0;

  public imageLoaded?: boolean = false;

  public imageSizes?: IImageSize[] = [];

  public isShowMenu?: boolean = false;
}

export interface IImageInfo {
  url: string;
  width?: number;
  height?: number;
  sizeKb?: number;
  originSizeKb?: number;
  originUrl?: string;
  props?: any;
  freeHeight?: boolean;
  freeWidth?: boolean;
}

export interface IImageSize {
  width: number;
  height: number;
  status: 'loading' | 'success' | 'fail';
}

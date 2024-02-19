# SliderVerify

滑块验证码组件

## 代码演示

<code src="./demo.tsx"></code>

## Props

```typescript
interface SliderVerifyProps {
  className?: string;
  // 关闭回调
  onClose?: () => void;
  // 成功回调
  onSuccess?: (result: any) => void;
  // 校验失败回调
  onFail?: () => void;
  // 获取验证的图片接口，需要符合接口定义
  getVerifyCode: () => Promise<{
    id: string;
    captcha: {
      backgroundImage: string;
      sliderImage: string;
      backgroundImageWidth: number;
      backgroundImageHeight: number;
      sliderImageWidth: number;
      sliderImageHeight: number;
    };
  }>;
  // 验证滑动结果结果，需要符合接口定义
  checkVerifyCode: (
    params?: Partial<ICurrentCaptchaConfig> & { id: string },
  ) => Promise<{
    matching: boolean;
    smsSendKey: string;
  }>;
}
```

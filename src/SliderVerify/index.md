# SliderVerify

滑块验证码组件

## 代码演示

<code src="./demo.tsx"></code>

## Props

```typescript
interface SliderVerifyProps {
  className?: string;
  onClose?: () => void;
  onSuccess?: (result: any) => void;
  onFail?: () => void;
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
  checkVerifyCode: (
    params?: Partial<ICurrentCaptchaConfig> & { id: string },
  ) => Promise<{
    matching: boolean;
    smsSendKey: string;
  }>;
}

```
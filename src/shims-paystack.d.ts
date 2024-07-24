declare module '@paystack/inline-js' {
    interface PaystackConfig {
      key: string;
      email: string;
      amount: number;
      currency?: string;
      metadata?: object;
      ref?: string;
      channels?: any[];
      firstName?: string;
      lastName?: string;
      phone?: string;
      customer?: string;
      onSuccess: (transaction: any) => void;
      onLoad?: (response: any) => void;
      onCancel: () => void;
      onError: (error: any) => void;
    }
  
    class Paystack {
      constructor();
      checkout(config: PaystackConfig): void;
    }
  
    export default Paystack;
  }
  
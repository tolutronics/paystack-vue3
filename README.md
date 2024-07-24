
# Paystack Vue 3 Library

A Vue 3 component library for integrating Paystack inline payment into your Vue.js applications.

## Installation

Install the package via npm:

```bash
npm install paystack-vue3
```

## Usage

1. Import the PaystackButton component into your Vue component:

```vue
<template>
  <div>
    <PaystackButton
      :publicKey="yourPublicKey"
      :email="customerEmail"
      :amount="transactionAmount"
      :currency="transactionCurrency"
      :firstName="customerFirstName"
      :lastName="customerLastName"
      :phone="customerPhone"
      :customerCode="paystackCustomerCode"
      :channels="paymentChannels"
      :metadata="transactionMetadata"
      :reference="transactionReference"
      :onSuccess="handleSuccess"
      :onCancel="handleCancel"
      :onError="handleError"
      :onLoaded="handleLoad"
    />
  </div>
</template>

<script setup lang="ts">
import PaystackButton from 'paystack-vue3';

const yourPublicKey = 'your-public-key';
const customerEmail = 'customer@example.com';
const transactionAmount = 5000; // Amount in the lowest denomination of your currency (e.g., kobo for NGN)
const transactionCurrency = 'NGN';
const customerFirstName = 'John';
const customerLastName = 'Doe';
const customerPhone = '1234567890';
const paystackCustomerCode = 'CUS_xxx';
const paymentChannels = ['card', 'bank', 'ussd'];
const transactionMetadata = { custom_field: 'custom_value' };
const transactionReference = `ref-${Math.floor(Math.random() * 1000000000 + 1)}`;

const handleSuccess = (transaction) => {
  console.log('Payment successful', transaction);
};

const handleCancel = () => {
  console.log('Payment cancelled');
};

const handleError = (error) => {
  console.log('Payment error', error);
};

const handleLoad = (response) => {
  console.log('Paystack loaded', response);
};
</script>
```

## Props

| Option         | Type     | Required | Description                                                                                      |
|----------------|----------|----------|--------------------------------------------------------------------------------------------------|
| `publicKey`    | String   | True     | Your public key, gotten from your Paystack dashboard in Settings > API Keys & Webhook            |
| `email`        | String   | True     | The customer's email address                                                                     |
| `amount`       | Number   | True     | The amount of the transaction in the lowest denomination of your currency                        |
| `currency`     | String   | False    | The currency of the transaction. You can check the API Reference for all supported currency      |
| `firstName`    | String   | False    | The customer's first name                                                                        |
| `lastName`     | String   | False    | The customer's last name                                                                         |
| `phone`        | String   | False    | The customer's phone number                                                                      |
| `customerCode` | String   | False    | A valid Paystack customer code. If provided, this overrides all the customer information above   |
| `channels`     | Array    | False    | An array of payment channels to use. Available channels are `['card', 'bank', 'ussd', 'qr', 'eft', 'mobile_money', 'bank_transfer']` |
| `metadata`     | Object   | False    | Metadata to pass to the Paystack API                                                             |
| `reference`    | String   | False    | Reference for the transaction. Default is a randomly generated reference                         |
| `onSuccess`    | Function | True     | Callback function to handle successful transactions                                              |
| `onCancel`     | Function | True     | Callback function to handle cancelled transactions                                               |
| `onError`      | Function | True     | Callback function to handle errors                                                               |
| `onLoaded`     | Function | False    | Callback function to handle the Paystack script loading                                          |

## License

This project is licensed under the MIT License.

<template>
    <button :class="buttonClass" @click="payWithPaystack" >
      <img v-if="showLogo" :class="logoClass" src="../assets/paystack-logo.png" alt="">
     <span>{{ buttonText }}</span> 
    </button>
  </template>

  <style scoped>
    .my-paystack-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #011b33;
      border: none;
      padding:5px 10px 5px 5px;
      border-radius: 4px;
      outline: none;
      color: white;
      text-align: center;
      text-decoration: none;
      font-weight: 700;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
    .my-paystack-logo {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
</style>
  
  <script setup lang="ts">
  import Paystack from '@paystack/inline-js';


  
  const props = defineProps({
    publicKey: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: 'Pay with Paystack'
    },
    buttonClass: {
      type: String,
      default: 'my-paystack-button'
    },
    logoClass: {
      type: String,
      default: 'my-paystack-logo'
    },
    email: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    },
    phone: {
      type: String,
      default: ''
    },
    customerCode: {
      type: String,
      default: ''
    },
    showLogo: {
      type: Boolean,
      default: true
    },
    channels: {
      type: Array,
      default: () => ['card', 'bank', 'ussd', 'bank_transfer']
    },
    currency: {
      type: String,
      default: 'NGN'
    },
    metadata: {
      type: Object,
      default: () => ({})
    },
    reference: {
      type: String,
      default: () => `ref-${Math.floor(Math.random() * 1000000000 + 1)}`
    },
    onSuccess: {
      type: Function,
      required: true
    },
    onCancel: {
      type: Function,
      required: true
    },
    onError: {
      type: Function,
      required: true
    },
    onLoaded: {
      type: Function,
      required: false
    },
   
  });
  
  const payWithPaystack = () => {
    const popup = new Paystack()

    popup.checkout({
    key: props.publicKey,
    email: props.email,
    amount: props.amount,
    currency: props.currency,
    metadata: props.metadata,
    ref: props.reference,
    channels: props.channels,
    firstName: props.firstName,
    lastName: props.lastName,
    phone: props.phone,
    customer: props.customerCode,
    
  onSuccess: (transaction:any) => {
    props.onSuccess(transaction);
  },
  onLoad: (response:any) => {
    if(props.onLoaded){
      props.onLoaded(response);
    }else{
      console.log('loaded', response)
    }
   
  },
  onCancel: () => {
    props.onCancel();
  },
  onError: (error:any) => {
    props.onError(error);
  }
})
  }

  
  </script>
  
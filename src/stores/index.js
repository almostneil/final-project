import { observable, computed, action } from 'mobx';
import gifts from './gifts';
import supplements from './supplements';
import fakeAmazonOrders from './fakeAmazonOrders';

class Store {

  giftOptions = gifts;
  supplements = supplements;
  fakeAmazonOrders = fakeAmazonOrders;

  @observable fields = {

    // step 1
    email: {
      value: '',
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },
    orderNumber: {
      value: '',
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },

    // step 2
    gift: {
      value: '',
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },

    // step 3 - shipping address
    firstName: {
      value: '',
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },
    lastName: {
      value: '',
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },
    address1: {
      value: '',
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },
    address2: {
      value: '',
      isRequired: false,
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },
    city: {
      value: '',
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },
    state: {
      value: '',
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },
    zip: {
      value: '',
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },

    // step ?
    // trying to get this from the Amazon Order Number

    // supplement: {
    //   value: '',
    //   isValid: null,
    //   isDirty: null,
    //   isPristine: true,
    //   errorMessage: null
    // },

    // step 4
    rating: {
      value: 0,
      isValid: null,
      isPristine: true,
      errorMessage: null
    },
    review: {
      value: '',
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },

    // step 5
    hasCopiedReview: {
      value: false,
      isValid: null
    },
    hasClickedAmazon: {
      value: false,
      isValid: null
    }
  }


  @action onFocus = (e) => {
    const { name, value } = e.target;
    this.fields[name].isDirty = (value.length > 0 || e.target === document.activeElement);
  }

  @action onBlur = (e) => {
    const { name, value } = e.target;
    this.fields[name].isPristine = false;
    this.fields[name].isDirty = (value.length > 0);
  }

  @action onChange = (e) => {
    const { name, value } = e.target;
    this.fields[name].value = value;
    this.fields[name].isDirty = (value.length > 0 || e.target === document.activeElement);
    
    let isValid, errorMessage, re;
    switch(name) {
      case 'email':
        re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isValid = re.test(value);
        if (!isValid) errorMessage = 'Please enter a valid email';
        break;
      case 'orderNumber':
        re = /^\d{3}-\d{7}-\d{7}$/;
        isValid = re.test(value);
        if (!isValid) errorMessage = 'Please enter a valid Amazon Order ID';
        break;
      case 'address2':
        isValid = true; // automatically valid, i.e. not required
        break;
      default:
        isValid = (value.length > 0);
        if (!isValid) errorMessage = 'Please complete this field before continuing';
        break;
    }
    if (this.fields[name].isRequired === false) {
      isValid = true;
    }
    this.fields[name].isValid = isValid;
    this.fields[name].errorMessage = errorMessage;

  }

  @action onStarClick = (value) => {
    this.fields.rating.value = value;
    this.fields.rating.isValid = true;
  }

  @action toggleUiState = (field, value) => {
    console.log(field, value);

    this.fields[field].value = value;
    this.fields[field].isValid = value;

    console.log(this.fields[field]);
  }

  @observable currentStepIndex = 0;
  totalSteps = 6;

  @computed get progressPercent() {
    const standInNum = this.currentStepIndex + 1; // account for zero-indexing
    const percent = standInNum/this.totalSteps * 100;
    return percent + '%';
  }

  stepsArr = ['step-1', 'step-2', 'step-3', 'step-4', 'step-5', 'step-6'];

  stepComponents = [
    ['email', 'orderNumber'],
    ['gift'],
    ['firstName', 'lastName', 'address1', 'city', 'state', 'zip'],
    ['rating', 'review'],
    ['hasCopiedReview', 'hasClickedAmazon']
  ];

  @action setCurrentStepIndex = (index) => {
    this.currentStepIndex = index;
  }

  @computed get stepObj() {
    const next = (this.stepsArr[this.currentStepIndex + 1])
      ? this.stepsArr[this.currentStepIndex + 1]
      : null;

    const previous = (this.stepsArr[this.currentStepIndex - 1])
      ? this.stepsArr[this.currentStepIndex - 1]
      : null;

    return { next, previous };
  }

  @computed get stepCompleted() {
    const Arr2Check = this.stepComponents[this.currentStepIndex];
    if (!Arr2Check) return false;

    let numRequired = Arr2Check.length;
    let numCompleted = 0;

    for (let x of Arr2Check) {
      if (this.fields[x].isValid) numCompleted++;
    }

    // if it's a digital product, we don't need to collect their shipping address
    // ...so the num required answers is 0
    if (this.currentStepIndex === 2 && this.giftType === 'digital') {
      numRequired = 0;
    }

    return (numCompleted >= numRequired);
  }

  @action makeFieldsDirty = (e) => {
    const Arr2Dirty = this.stepComponents[this.currentStepIndex];
    if (Arr2Dirty) {
      for (let x of Arr2Dirty) {
        this.fields[x].isPristine = false;
      }
    }
  }

  @computed get giftImage() {
    return (this.fields.gift.value !== '')
      ? `https://onnits3.imgix.net/authority/${this.fields.gift.value}.png?auto=format&ver=&w=735`
      : '/assets/generic-gift.svg';
  }

  @computed get supplementImage() {
    return (this.whichSupp !== null)
      ? `https://onnits3.imgix.net/authority/${this.whichSupp.id}.png?auto=format&ver=&w=735`
      : '/assets/generic-supplement.svg';
  }

  @computed get supplementReviewLink() {
    return (this.whichSupp !== null)
      ? `https://www.amazon.com/review/create-review?asin=${this.whichSupp.asin}`
      : 'https://www.amazon.com/review/create-review';
  }

  @computed get giftType() {
    if (this.fields.gift.value === '') return 'basic';
    let giftObj = this.giftOptions.find((x) => x.id === this.fields.gift.value);
    return giftObj.type;
  }

  @computed get whichSupp() {
    if (this.fields.orderNumber.value === '') return null;
    let order = this.fakeAmazonOrders.find((x) => x.orderNumber === this.fields.orderNumber.value);
    let supplementObj = this.supplements.find((x) => x.id === order.productId);
    return supplementObj;
  }
  
}

const store = new Store();
export default store;
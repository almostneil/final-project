import { observable, computed, action } from 'mobx';

class Store {
  @observable fields = {

    // step 1
    name: {
      value: '',
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },
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
    product: {
      value: '',
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },
    howLongTaking: {
      value: '',
      isValid: null,
      isDirty: null,
      isPristine: true,
      errorMessage: null
    },

    // step 3
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

    // step 4
    hasCopiedReview: {
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
      default:
        isValid = (value.length > 0);
        if (!isValid) errorMessage = 'Please complete this field before continuing';
        break;
    }
    this.fields[name].isValid = isValid;
    this.fields[name].errorMessage = errorMessage;

  }

  @action onStarClick = (value) => {
    this.fields.rating.value = value;
    this.fields.rating.isValid = true;
  }

  @action toggleCopiedReview = () => {
    this.fields.hasCopiedReview.value = true;
    this.fields.hasCopiedReview.isValid = true;
  }



  @computed get progress() {
    const keys = Object.keys(this.fields);
    const totalFields = keys.length;
    let completedFields = 0;

    for (let key of keys) {
      if (this.fields[key].isValid) {
        completedFields++;
      }
    }

    return Math.round(completedFields/totalFields * 100);
  }



  @observable currentStepIndex = 0;

  stepsArr = ['step-1', 'step-2', 'step-3', 'step-4'];
  stepComponents = [
    ['name', 'email', 'orderNumber'],
    ['product', 'howLongTaking'],
    ['rating', 'review']
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
    if (Arr2Check) {
      for (let x of Arr2Check) {
        if (!this.fields[x].isValid) {
          return false;
        }
      }
    }
    return true;
  }

  @action makeFieldsDirty = (e) => {
    const Arr2Dirty = this.stepComponents[this.currentStepIndex];
    if (Arr2Dirty) {
      for (let x of Arr2Dirty) {
        this.fields[x].isPristine = false;
      }
    }
  }

  @computed get productImage() {
    return (this.fields.product.value !== '')
      ? `https://onnits3.imgix.net/authority/${this.fields.product.value}.png?auto=format&ver=&w=735`
      : '/assets/generic-supplement.svg';
  }

  @computed get supplementName() {
    if (this.fields.product.value === '') return '';
    let supplementObj = this.supplements.find((x) => x.id == this.fields.product.value).name;
    return supplementObj;
  }

  supplements = [
    {
      "id": "32",
      "name": "Alpha BRAIN (30ct)",
      "authority_id": "32"
    },
    {
      "id": "46",
      "name": "New MOOD (30ct)",
      "authority_id": "46"
    },
    {
      "id": "55",
      "name": "Shroom TECH Immune (30ct)",
      "authority_id": "55"
    },
    {
      "id": "107",
      "name": "Alpha BRAIN (90ct)",
      "authority_id": "107"
    },
    {
      "id": "167",
      "name": "Spirulina and Chlorella (80 tabs)",
      "authority_id": "167"
    },
    {
      "id": "256",
      "name": "Total Primate Care (15 day supply)",
      "authority_id": "256"
    },
    {
      "id": "322",
      "name": "Krill Oil (60ct)",
      "authority_id": "322"
    },
    {
      "id": "413",
      "name": "DigesTech (60ct)",
      "authority_id": "413"
    },
    {
      "id": "573",
      "name": "Shroom TECH Sport (90ct)",
      "authority_id": "573"
    },
    {
      "id": "628",
      "name": "ViruTech (60ct)",
      "authority_id": "628"
    },
    {
      "id": "638",
      "name": "Shroom TECH Immune (90ct)",
      "authority_id": "638"
    },
    {
      "id": "2056",
      "name": "Alpha BRAIN Instant - Natural Peach (30ct box)",
      "authority_id": "2056"
    },
    {
      "id": "2743",
      "name": "Vitamin D3 Spray in MCT Oil (24mL)",
      "authority_id": "2743"
    },
    {
      "id": "2752",
      "name": "Onnit Total Gut Health (15ct box)",
      "authority_id": "2752"
    },
    {
      "id": "2826",
      "name": "Total Strength + Performance - Strawberry Lemonade (312g tub)",
      "authority_id": "2826"
    },
    {
      "id": "2887",
      "name": "Earth Grown Nutrients - Black Cherry (200g tub)",
      "authority_id": "2887"
    },
    {
      "id": "2888",
      "name": "Earth Grown Nutrients - Lemon Mint (200g tub)",
      "authority_id": "2888"
    },
    {
      "id": "2981",
      "name": "Key Minerals (120ct)",
      "authority_id": "2981"
    },
    {
      "id": "2982",
      "name": "New MOOD (60ct)",
      "authority_id": "2982"
    },
    {
      "id": "3012",
      "name": "Melatonin Spray - Mint (1 fl. oz.)",
      "authority_id": "3012"
    },
    {
      "id": "3013",
      "name": "Melatonin Spray - Lavender (1 fl. oz.)",
      "authority_id": "3013"
    },
    {
      "id": "3482",
      "name": "Fulvic Minerals Concentrate - Original (32oz)",
      "authority_id": "3482"
    },
    {
      "id": "3483",
      "name": "Fulvic Minerals Concentrate - Mocha (32oz)",
      "authority_id": "3483"
    },
    {
      "id": "3548",
      "name": "Onnit Joint Oil - Tangerine Dream (12oz)",
      "authority_id": "3548"
    },
    {
      "id": "4448",
      "name": "Shroom TECH Sport (28ct)",
      "authority_id": "4448"
    },
    {
      "id": "4449",
      "name": "Shroom TECH Sport (84ct)",
      "authority_id": "4449"
    }
  ];
  
}

const store = new Store();

export default store;
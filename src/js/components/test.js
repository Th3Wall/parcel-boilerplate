export default class testClass {
  constructor() {
    if (!testClass.instance) {
      this.set = {
          headings: document.querySelectorAll("h1"),
      };


      testClass.instance = this;
    }
    return testClass.instance;
  }

  testFunc() {
    console.log("Hi, I'm a test function!");



  }

  init() {
    this.testFunc();
  }
}
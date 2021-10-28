import testClass from "./js/components/test";
import data from "./mock/test.json"

const parcelTest = {};
//instance
parcelTest.test = new testClass();
// init
parcelTest.test.init();

console.log("mock data => ", data);
var abc = [];

$.getJSON("https://json.geoiplookup.io/?callback=?", function (data) {
  var t = JSON.stringify(data, null, 2);
  abc.push(t);
});

setTimeout(function () {
}, 5000);

// var mobileAds = [
//   "mobile/bb.jpg",
//   "mobile/eyeko.jpg",
//   "mobile/farfetch.jpg",
//   "mobile/fsb.jpg",
// ];
// var randNum = Math.floor(Math.random() * mobileAds.length);
// var randAd = []; // see the change here

// var i;
// for (i = 0; i < mobileAds.length; ++i) {
//   var a = "ABC";
//   randAd.push(mobileAds[randNum]); // push every element here
//   randAd.push(a); // push every element here
//   console.log("ABC in Loop: " + randAd);
// }
// console.log("ABC out Loop: " + randAd);

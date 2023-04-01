const footer = document.querySelector("footer[data-footer]");
console.log(footer);
const scrollHeight = document.body.scrollHeight;
console.log(document.body.scrollHeight); // 滾輪的高度
//const footerHeight = 66; //footer高度

if(scrollHeight <= 650 ) {
  footer.style.position = 'fixed';
  footer.style.bottom = '0px';
  footer.style.width = '100%';
}


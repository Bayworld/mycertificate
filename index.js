const rainbow =
['gray','orange','pink','green','blue','rebeccapurple','violet', 'gold', 'red'];
setInterval(
function change() {
document.body.style.background =
 rainbow[Math.floor(7*Math.random())];
},2000);



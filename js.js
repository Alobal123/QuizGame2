

$( document ).ready(function() {
  console.log("Ready");
  var covers = document.getElementsByClassName('black');
  var interval = setInterval( removeOneCover, 1000);
  

  function removeOneCover(){
	const length = covers.length
	if(length == 0){
		console.log("clearing")
		clearInterval(interval)
		return;
	}
	const index = Math.floor(Math.random()*length);
	console.log(length);
	covers[index].remove();
	}
	
});



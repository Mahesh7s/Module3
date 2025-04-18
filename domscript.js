let item2=document.getElementById("item2")
	item2.addEventListener("click",()=>{
		let text=item2.parentElement.innerText
		alert(text);
	})
	console.log("Previous sibling:", item2.previousElementSibling.textContent);
    console.log("Next sibling:", item2.nextElementSibling.textContent);
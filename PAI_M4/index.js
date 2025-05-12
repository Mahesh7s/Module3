async function fetchData(){
	let res = await fetch("https://jsonplaceholder.typicode.com/users")
	let data = await res.json()
	let users=[]
	users=data.map(ele=>{
		return {"name":ele.name,"city":ele.address.city}
	})
	// users=users.filetr
	let user = users.filter(ele=>{
		return ele.city.startsWith("S")
	})
	
	let main ={user}
	console.log(main)
	// console.log(users)
	// console.log(fil)
	
 }
fetchData()
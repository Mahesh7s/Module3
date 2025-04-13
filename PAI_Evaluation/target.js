function findInd(arr,k){
    
    arr.sort((a,b)=>a-b)
    // console.log(arr)
    let res=[]
    let left=0,right=arr.length-1;
    while(left<=right){
        if(arr[left]+arr[right]==k){
           res.push([left,right]);
            left++
            right--
            
        }
        else if(arr[left]+arr[right]>k){
            right--
        }else{
            left++
        }
    }
    console.log(res)
    
    
    
    
}

findInd([7,11,2,3,6,19],9)
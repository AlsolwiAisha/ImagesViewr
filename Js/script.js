

let div=document.querySelector(".imags");
async function getResponse() {
    
    let txt=document.querySelector("#text_").value;
let cont=document.querySelector("#count").value;
    console.log(txt);
	let response = await fetch(`https://api.unsplash.com/search/photos/?query=${txt}&per_page=${cont}&client_id=nzkXeb3JiUd1iCWYpQBHAD91vCQ0UeQW00PO5iEx7Uk`);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
    let child = div.lastElementChild;  
    while (child) { 
        div.removeChild(child); 
        child = div.lastElementChild; 
    } 
	let data = await response.json();
    data.results.map((item) => {
        let divSearch=document.createElement("div");
        let element=document.createElement("img");
        let elementName=document.createElement("h3");
        element.src=item.urls.small;
        elementName.innerHTML=item.user.name;
        div.appendChild(divSearch)
        divSearch.appendChild(element)
        divSearch.appendChild(elementName)
       
});
    
 // document.querySelector("#cu").innerHTML=`${data.total}`
}

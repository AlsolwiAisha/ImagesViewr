let ConStr;

function getHtmlCode(Item){
    return   `<div class="singlePhoto">
    <div class="myPhoto">
    <img src="${Item.urls.small_s3}" alt="${Item.id}" />
    </div>
    <div class="username">

    <span style='color:${Item.color}'>${Item.user.name}</span>
    <div class="statistics">

    <div class="likesAndDownloads">
    <img width="20" src="images/favorite_FILL0_wght400_GRAD0_opsz48.svg" />
    <span>${Item.likes}</span></div>

     <div class="likesAndDownloads">
     <img width="20" src="images/file_download_FILL0_wght400_GRAD0_opsz48.svg" />
     <span>${Item.downloads}</span></div>

     </div>

    </div>
    </div>`;
}
async function getResponse() {
    
    let txt=document.querySelector("#text_").value;
let cont=document.querySelector("#count").value;
if(!txt && !cont)
{
     ConStr="https://api.unsplash.com/photos/random/?count=10&client_id=nzkXeb3JiUd1iCWYpQBHAD91vCQ0UeQW00PO5iEx7Uk";
}
else
{
ConStr=`https://api.unsplash.com/search/photos/?query=${txt}&per_page=${cont}&client_id=nzkXeb3JiUd1iCWYpQBHAD91vCQ0UeQW00PO5iEx7Uk`;
}

 let response = await fetch(ConStr);
 if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
}
let data= await response.json();
 let Photos;
   if(!txt && !cont){
     Photos= data.map((item) => {
        return  getHtmlCode(item);
       
});}
else{ 
    Photos= data.results.map((item) => {
    
        return  getHtmlCode(item);   
});}
document.querySelector(".imags").innerHTML = Photos.join("");

}
getResponse();
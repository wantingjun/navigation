
const x = localStorage.getItem('nav')
const xObject = JSON.parse(x)
const hashMap = xObject || [
    {logo:'A',url:'https://www.baidu.com'},
    {logo:'B',url:'https://www.bilibili.com/'}
]
const simplfyUrl=(url)=>{
    return url.replace('https://','')
    .replace('http://','')
    .replace('www.','')
    .replace(/\/.*/,'')
  }
const $siteList = $('.siteList')
const $lastLi = $('.siteList').find('li.last')
const render = ()=>{
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node,index)=>{
        const $li=$(`<li>
         <div class = 'site'>
            <div class="logo">${node.logo}</div>
            <div class="link">${simplfyUrl(node.url)}</div>
            <div class="close" >
             <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconbaseline-close-px">
                </use>
             </svg>
        </div>
        </div>

    </li>`).insertBefore($lastLi)
    $li.on('click',()=>{
        window.open(node.url)
    })
    $li.on('click','.close',(e)=>{ //阻止冒泡
        e.stopPropagation();
        console.log(123)
        hashMap.splice(index,1)
        render()
    })
    })
}
render()


$('.addButton').on('click',()=>{
    let url = window.prompt('请输入要添加的网址')
    console.log(url)
    if(url.indexOf('http')!==0){
        //alert('请输入http开头的网址')
        url = 'https://' +url
    }
 hashMap.push({
     logo:simplfyUrl(url)[0].toUpperCase(),
     url:url
    })
//  $siteList.find('li:not(.last)').remove()
 render()

})

window.onbeforeunload=()=>{
    const string = JSON.stringify(hashMap)
    localStorage.setItem('nav',string)
}
$(document).on('keypress',(e)=>{
    const {key} = e
    console.log(key)
    for(let i =0;i< hashMap.length;i++){
        if(hashMap[i].logo.toLowerCase() === key){
            window.open(hashMap[i].url)
        }
    }
})
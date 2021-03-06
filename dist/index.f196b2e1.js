(function () {
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$x = localStorage.getItem('nav');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject = JSON.parse($16b5ad875ae907e2f7f79e7b8fe116cc$var$x);
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap = $16b5ad875ae907e2f7f79e7b8fe116cc$var$xObject || [{
    logo: 'A',
    url: 'https://www.baidu.com'
  }, {
    logo: 'B',
    url: 'https://www.bilibili.com/'
  }];
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplfyUrl = url => {
    return url.replace('https://', '').replace('http://', '').replace('www.', '').replace(/\/.*/, '');
  };
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList = $('.siteList');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi = $('.siteList').find('li.last');
  const $16b5ad875ae907e2f7f79e7b8fe116cc$var$render = () => {
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$$siteList.find('li:not(.last)').remove();
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.forEach((node, index) => {
      const $li = $(`<li>
         <div class = 'site'>
            <div class="logo">${node.logo}</div>
            <div class="link">${$16b5ad875ae907e2f7f79e7b8fe116cc$var$simplfyUrl(node.url)}</div>
            <div class="close" >
             <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconbaseline-close-px">
                </use>
             </svg>
        </div>
        </div>

    </li>`).insertBefore($16b5ad875ae907e2f7f79e7b8fe116cc$var$$lastLi);
      $li.on('click', () => {
        window.open(node.url);
      });
      $li.on('click', '.close', e => {
        // 阻止冒泡
        e.stopPropagation();
        console.log(123);
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.splice(index, 1);
        $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
      });
    });
  };
  $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
  $('.addButton').on('click', () => {
    let url = window.prompt('请输入要添加的网址');
    console.log(url);
    if (url.indexOf('http') !== 0) {
      // alert('请输入http开头的网址')
      url = 'https://' + url;
    }
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.push({
      logo: $16b5ad875ae907e2f7f79e7b8fe116cc$var$simplfyUrl(url)[0].toUpperCase(),
      url: url
    });
    // $siteList.find('li:not(.last)').remove()
    $16b5ad875ae907e2f7f79e7b8fe116cc$var$render();
  });
  window.onbeforeunload = () => {
    const string = JSON.stringify($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap);
    localStorage.setItem('nav', string);
  };
  $(document).on('keypress', e => {
    const {key} = e;
    console.log(key);
    for (let i = 0; i < $16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap.length; i++) {
      if ($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap[i].logo.toLowerCase() === key) {
        window.open($16b5ad875ae907e2f7f79e7b8fe116cc$var$hashMap[i].url);
      }
    }
  });
})();

//# sourceMappingURL=index.f196b2e1.js.map

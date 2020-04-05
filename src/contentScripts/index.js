// import './index.styl'
import $ from 'jquery'
let src = 'https://via.placeholder.com/150'
setTimeout(() => {
  let groups = $('div[style*="background-image"]')
  console.log(groups)
  let imgs = $('img')
  groups.each((i) => {
    $(groups[i]).css({
      'background-image': `url(${chrome.extension.getURL(
        '/assets/img/yan.png'
      )})`,
    })
  })
  imgs.each((i) => {
    imgs[i].src = chrome.extension.getURL('/assets/img/yan.png')
  })
}, 3000)

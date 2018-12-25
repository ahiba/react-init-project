export const initSize = () => {
  // 设置rem代码
  function setRem() {
    let viewWidth = client.width
    document.documentElement.style.fontSize = viewWidth / 13.66 + 'px'
  }
  setRem()
  window.addEventListener('resize', setRem)
}

function client() {
  if (window.innerHeight !== undefined) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  } else if (document.compatMode === 'CSS1Compat') {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }
  } else {
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }
  }
}

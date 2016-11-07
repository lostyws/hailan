;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-search" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M334.792596 193.026672c-112.231356 50.208765-180.160861 168.347034-165.393577 289.43876 20.674197 191.974688 225.93944 308.636229 401.670116 230.369626l72.35969-32.488024 93.033887 93.033887c72.35969 72.35969 95.987344 88.603702 110.754628 73.836418 14.767284-14.767284-1.476728-38.394938-75.313147-112.231356l-93.033887-93.033887 31.011296-57.592406c33.964752-63.49932 41.348394-169.823762 14.767284-237.753267-54.63895-144.71938-245.136909-220.032527-389.856289-153.57975zm222.985984 44.301851c91.557159 41.348394 131.428825 107.801171 131.428825 215.602342 0 109.277899-41.348394 174.253948-137.335738 217.07907-91.557159 41.348394-178.684133 26.581111-255.474008-42.825123-126.99864-115.184813-101.894257-311.589686 50.208765-386.902833 76.789875-38.394938 132.905553-38.394938 211.172157-2.953457z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)

;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-search" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M334.792596 193.026672c-112.231356 50.208765-180.160861 168.347034-165.393577 289.43876 20.674197 191.974688 225.93944 308.636229 401.670116 230.369626l72.35969-32.488024 93.033887 93.033887c72.35969 72.35969 95.987344 88.603702 110.754628 73.836418 14.767284-14.767284-1.476728-38.394938-75.313147-112.231356l-93.033887-93.033887 31.011296-57.592406c33.964752-63.49932 41.348394-169.823762 14.767284-237.753267-54.63895-144.71938-245.136909-220.032527-389.856289-153.57975zm222.985984 44.301851c91.557159 41.348394 131.428825 107.801171 131.428825 215.602342 0 109.277899-41.348394 174.253948-137.335738 217.07907-91.557159 41.348394-178.684133 26.581111-255.474008-42.825123-126.99864-115.184813-101.894257-311.589686 50.208765-386.902833 76.789875-38.394938 132.905553-38.394938 211.172157-2.953457z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-nhome" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M474.56 216.256 184.256 506.496c-12.48 12.48-12.48 32.768 0 45.248s32.768 12.48 45.248 0l283.52-283.52 283.52 283.52c12.48 12.48 32.768 12.48 45.248 0s12.48-32.768 0-45.248L551.488 216.256c-10.496-10.496-26.24-11.648-38.528-4.48C500.736 204.608 484.992 205.76 474.56 216.256zM576 0 448 0 0 481.984 0 640l128 0c0 0 0 64 0 192s128 128 128 128l192 0 0-192 128 0 0 192 192 0c0 0 128 0 128-128s0-192 0-192l128 0L1024 481.984 576 0zM960 576l-128 0 0 256c0 35.392-28.608 64-64 64l-128 0 0-192L384 704l0 192L256 896c-35.328 0-64-28.608-64-64L192 576 64 576 64 512l448-448 448 448L960 576z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-arrownext" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512.000512 65.123206c-239.549841 0-433.756985 194.207144-433.756985 433.789731 0 239.549841 194.208167 433.758008 433.756985 433.758008 239.548818 0 433.755961-194.208167 433.755961-433.758008C945.756473 259.331373 751.54933 65.123206 512.000512 65.123206zM512.000512 897.969609c-220.047672 0-399.056672-179.026396-399.056672-399.055648 0-220.064045 179.009-399.089417 399.056672-399.089417 220.029252 0 399.055648 179.025373 399.055648 399.089417C911.05616 718.943213 732.028741 897.969609 512.000512 897.969609z"  ></path>'+
      ''+
      '<path d="M628.2 492.102834 477.535559 342.220199 453.068308 366.855272 591.363024 504.403998 464.523197 630.972649 489.057987 655.540184 640.330272 504.540098 628.063901 492.237911Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-hengxian" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M0.021487 447.848934l1023.957021 0 0 127.921461L0.021487 575.770396 0.021487 447.848934z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-fenxiang" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M511.376261 0c-281.972071 0-511.376261 229.40419-511.376261 511.376261 0 281.971072 229.40419 511.376261 511.376261 511.376261 281.971072 0 511.376261-229.405188 511.376261-511.376261C1022.752522 229.40419 793.347333 0 511.376261 0zM511.376261 986.866293c-262.189201 0-475.490032-213.30183-475.490032-475.490032s213.30183-475.490032 475.490032-475.490032 475.490032 213.30183 475.490032 475.490032S773.565462 986.866293 511.376261 986.866293z"  ></path>'+
      ''+
      '<path d="M637.836014 610.93982c-27.809081 0-52.410074 12.89627-68.985856 32.731077L418.304783 558.932255c3.372886-9.44448 5.546235-19.476244 5.546235-30.077314 0-10.995588-2.260243-21.411883-5.878829-31.171979l114.1238-75.171312c15.726818 13.264821 35.755388 21.57868 57.885396 21.57868 49.782279 0 90.276887-40.494608 90.276887-90.275888 0-49.772291-40.494608-90.266899-90.276887-90.266899-49.78128 0-90.275888 40.494608-90.275888 90.266899 0 14.613176 3.82034 28.237558 10.013786 40.45965l-110.611085 72.867122c-16.479899-17.48767-39.670613-28.561163-65.534066-28.561163-49.78128 0-90.275888 40.493609-90.275888 90.275888 0 49.772291 40.494608 90.266899 90.275888 90.266899 26.265963 0 49.729344-11.460022 66.2442-29.420116l151.998603 85.544659c-2.505943 8.287891-4.258805 16.874418-4.258805 25.968326 0 49.763302 40.494608 90.25791 90.276887 90.25791 49.78128 0 90.275888-40.494608 90.275888-90.25791C728.111903 651.433429 687.617295 610.93982 637.836014 610.93982zM589.981384 299.432774c29.99841 0 54.390658 24.391249 54.390658 54.38067s-24.392248 54.389659-54.390658 54.389659c-29.997411 0-54.389659-24.400238-54.389659-54.389659S559.983973 299.432774 589.981384 299.432774zM333.57513 583.235612c-29.989421 0-54.389659-24.391249-54.389659-54.38067s24.400238-54.389659 54.389659-54.389659 54.389659 24.400238 54.389659 54.389659S363.565549 583.235612 333.57513 583.235612zM637.836014 755.58739c-29.99841 0-54.389659-24.391249-54.389659-54.371681 0-29.99841 24.391249-54.389659 54.389659-54.389659s54.389659 24.391249 54.389659 54.389659C692.225674 731.196141 667.834425 755.58739 637.836014 755.58739z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiantou-right" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M333.235 93.946l-59.968 59.373 356.81 359.257-359.809 356.233 59.46 59.868 419.77-415.61z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-xiangyoujiantou" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M761.6 489.6l-432-435.2c-9.6-9.6-25.6-9.6-35.2 0-9.6 9.6-9.6 25.6 0 35.2l416 416-416 425.6c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l432-441.6C771.2 515.2 771.2 499.2 761.6 489.6z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-geren" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M586.945923 513.581008c55.067176-27.962865 92.91211-85.125773 92.91211-150.998039 0-93.338828-75.937506-169.276335-169.277358-169.276335s-169.275311 75.937506-169.275311 169.276335c0 65.872267 37.844933 123.034151 92.911086 150.998039-95.652524 32.016181-164.778904 122.45496-164.778904 228.743728 0 11.31572 9.17394 20.491707 20.491707 20.491707s20.491707-9.174963 20.491707-20.491707c0-110.36869 89.791026-200.160739 200.160739-200.160739S710.741413 631.956046 710.741413 742.324736c0 11.31572 9.17394 20.491707 20.491707 20.491707s20.491707-9.174963 20.491707-20.491707C751.723803 636.035968 682.598446 545.598212 586.945923 513.581008zM382.287753 362.582969c0-70.742181 57.552787-128.293945 128.292921-128.293945 70.742181 0 128.293945 57.552787 128.293945 128.293945 0 70.741157-57.552787 128.292921-128.293945 128.292921C439.84054 490.876913 382.287753 433.324126 382.287753 362.582969z"  ></path>'+
      ''+
      '<path d="M827.871087 196.127889C743.498468 111.757317 631.320573 65.290005 512 65.290005S280.500509 111.756293 196.128913 196.127889C111.756293 280.501532 65.291029 392.678404 65.291029 511.998977s46.465265 231.499491 130.837884 315.872111 196.550515 130.837884 315.871087 130.837884 231.498468-46.465265 315.871087-130.837884S958.708971 631.319549 958.708971 511.998977 912.243707 280.500509 827.871087 196.127889zM512 917.726581c-223.718271 0-405.726581-182.007287-405.726581-405.727605 0-223.718271 182.00831-405.726581 405.726581-405.726581s405.726581 182.007287 405.726581 405.726581C917.726581 735.719294 735.718271 917.726581 512 917.726581z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-dian-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M377.804 506.517c0 79.565 64.5 144.068 144.067 144.068s144.067-64.5 144.067-144.067c0 0 0 0 0 0 0-79.566-64.5-144.067-144.067-144.067-79.566 0-144.067 64.5-144.067 144.067 0 0 0 0 0 0z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-locate" viewBox="0 0 1027 1024">'+
      ''+
      '<path d="M512 0C229.22752 0 0 229.22752 0 512s229.22752 512 512 512 512-229.22752 512-512S794.77248 0 512 0zM514.56 988.16c-261.56032 0-473.6-212.03968-473.6-473.6C40.96 252.99968 252.99968 40.96 514.56 40.96c261.56032 0 473.6 212.03968 473.6 473.6C988.16 776.12032 776.12032 988.16 514.56 988.16zM514.56 323.11296c-65.22368 0-118.3232 52.71552-118.3232 117.53984 0 64.82432 53.07392 117.51424 118.3232 117.51424 65.24928 0 118.35392-52.72064 118.35392-117.53984S579.78368 323.11296 514.56 323.11296zM514.56 512.04608c-39.65952 0-71.81824-31.97952-71.81824-71.41888S474.87488 369.23904 514.56 369.23904c39.65952 0 71.81824 31.9744 71.81824 71.41376C586.37824 480.09728 554.1888 512.04608 514.56 512.04608zM514.56 179.18976c-145.6384 0-263.68 119.74656-263.68 267.42272 0 147.64544 263.68 398.17728 263.68 398.17728s263.68512-250.53184 263.68512-398.20288C778.2144 298.9056 660.1472 179.18976 514.56 179.18976zM514.56 779.71456c-94.8224-96.88064-217.17504-249.7536-217.17504-333.1072C297.35424 324.56704 394.79808 225.3056 514.56 225.3056c119.76704 0 217.18016 99.29216 217.18016 221.30176C731.74016 529.84832 609.3824 682.77248 514.56 779.71456z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-dianhua-copy" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M713.831988 816.01388c-46.326229 0-99.547698-17.570253-158.193712-52.229486-51.652216-29.791479-106.367419-73.363196-162.617314-129.503014-48.54571-48.607149-93.11453-106.353339-125.549163-162.655714-16.534751-26.955048-27.159845-53.751379-36.178567-78.700703-9.274718-25.297477-13.993995-49.403295-13.993995-71.566108 0-14.447107 4.962473-29.335807 13.983755-42.010145 7.274113-11.725875 16.719067-23.45559 28.087828-34.87811 10.052944-10.090063 41.672231-37.896297 56.824606-47.944121 0.097278-0.066559 0.197117-0.130558 0.295675-0.193277 2.663633-1.69597 5.474464-3.036107 8.359534-3.98329l11.560758-3.99609c0.099838-0.033279 0.197117-0.067839 0.296955-0.099838 3.720895-1.218539 7.587707-1.836768 11.492919-1.836768 9.70223 0 19.126705 3.928251 25.918266 10.792771l0.381433 0.357114c18.194882 17.031382 37.14239 39.797064 53.349466 64.103838 23.546468 35.280023 36.437122 64.521111 40.886324 75.45596 0.110078 0.272635 0.215036 0.54527 0.312315 0.823026 1.537253 4.340404 2.318039 8.694888 2.318039 12.946973 0 15.387891-8.292975 25.047882-20.844435 39.669066l-1.15454 1.345256c-0.039679 0.047359-0.079359 0.094718-0.122878 0.140798-2.210521 2.526676-7.763064 8.875365-9.747029 11.535158-1.015022 3.335622-6.509966 26.761772 22.632564 66.85835 0.407033 0.56063 43.814913 59.260403 93.958036 97.812048 17.595852 13.412885 31.143135 18.959028 46.698703 19.099826l0.734707 0.00512c13.576722 0 22.83096-6.111893 33.544373-13.192729 11.760434-7.769464 25.187399-16.619229 43.786754-16.189157 7.42515 0.175357 34.680993 4.980393 97.986125 54.928959 30.550505 24.277335 45.784799 36.906874 52.289645 42.29942 1.832928 1.520613 2.929869 2.437077 3.490499 2.87227 0.044799 0.034559 0.129278 0.102398 0.172797 0.136958 10.137423 8.029299 15.204854 20.489881 13.565203 33.347256-3.289542 26.614574-32.622789 62.144192-56.663328 87.268873l-0.373753 0.392953c-0.171517 0.186877-0.346874 0.369914-0.524791 0.55039-8.719207 8.774246-22.516086 20.5718-39.023957 27.349281C740.806236 812.541301 726.031454 816.01388 713.831988 816.01388zM792.125658 778.29166c-0.239356 0.294395-0.487671 0.58495-0.742387 0.867825C791.799264 778.708933 792.034779 778.404298 792.125658 778.29166zM337.088501 228.748637c-12.54762 8.429932-41.798949 34.079404-50.506636 42.819091-9.462874 9.505114-17.184979 19.089586-22.949998 28.482062-0.262395 0.424953-0.540151 0.839665-0.831985 1.245418-4.5772 6.29877-7.100036 13.424405-7.100036 20.064929 0 17.639371 3.929531 37.298547 11.677236 58.430977 7.807863 21.599622 17.407695 46.675663 32.954303 71.964181 0.097278 0.158717 0.191997 0.317434 0.285435 0.478712 30.812901 53.544023 73.271038 108.55234 119.552468 154.891369 53.888337 53.782099 105.952706 95.321212 154.730092 123.43976 0.061439 0.034559 0.122878 0.070399 0.183037 0.104958 52.683878 31.152095 99.365941 46.944458 138.749572 46.944458 6.356369 0 15.697645-2.232281 21.268108-5.085351 0.536311-0.275195 1.086701-0.524791 1.646051-0.747507 11.158845-4.442802 21.369226-13.625362 26.594095-18.85407 0.177917-0.189437 0.375033-0.395513 0.607989-0.637429 29.342207-30.669543 44.315384-54.676803 46.173912-64.631189-0.799986-0.647669-1.879007-1.542373-3.499459-2.887629-6.415248-5.317027-21.431945-17.767369-51.618937-41.756709-50.541196-39.876422-72.609289-45.948636-75.705555-46.643664-6.058134 0.117758-11.707955 3.659456-21.063311 9.840468-13.387286 8.844645-30.134513 19.915171-55.879982 19.545258-23.890782-0.215036-45.385446-8.542571-69.606462-27.004967-45.938396-35.319702-88.958443-88.277495-101.664781-105.70567-17.182419-23.642466-27.359521-46.659023-30.26635-68.432722-3.051467-22.85144 3.062986-36.092808 5.007272-39.607627 2.132443-3.836093 6.187412-8.708968 14.468867-18.174402l1.095661-1.276138c5.16343-6.014615 10.497096-12.227626 11.524918-14.578945-3.482819-8.469612-15.362291-35.565458-37.006712-67.99369-14.622464-21.931136-31.542488-42.30582-47.644606-57.377556-0.204796-0.191997-0.390393-0.366074-0.55551-0.524791l-10.479177 3.622337C337.181939 228.715357 337.13586 228.731997 337.088501 228.748637z"  ></path>'+
      ''+
      '<path d="M511.939841 1023.957761C229.667661 1023.957761 0.02176 794.30674 0.02176 512.02688 0.02176 229.69454 229.667661 0 511.939841 0c282.338739 0 512.038399 229.69454 512.038399 512.02688C1023.97824 794.30674 794.27858 1023.957761 511.939841 1023.957761zM511.939841 38.399328C250.83977 38.399328 38.421088 250.86793 38.421088 512.02688c0 261.107751 212.418683 473.531553 473.518753 473.531553 261.16535 0 473.639071-212.423803 473.639071-473.531553C985.578912 250.86793 773.105191 38.399328 511.939841 38.399328z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-home" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M510.582 1018.863c-280.254 0-508.256-228.005-508.256-508.256s228.003-508.257 508.256-508.257 508.256 228.005 508.256 508.256-228.001 508.257-508.256 508.257zM510.582 38.018c-260.586 0-472.589 212.004-472.589 472.589s212.003 472.589 472.589 472.589 472.589-212.004 472.589-472.589-212.002-472.589-472.589-472.589z"  ></path>'+
      ''+
      '<path d="M726.481 778.11h-152.427c-20.24 0-36.708-16.615-36.708-37.034v-162.565h-53.526v162.565c0 20.419-16.468 37.034-36.709 37.034h-152.427c-20.241 0-36.709-16.615-36.709-37.034v-263.463c0-9.849 7.984-17.834 17.834-17.834s17.834 7.985 17.834 17.834v263.462c0 0.818 0.54 1.366 1.042 1.366h152.427c0.502 0 1.042-0.548 1.042-1.366v-180.398c0-9.849 7.984-17.834 17.834-17.834h89.195c9.85 0 17.834 7.985 17.834 17.834v180.399c0 0.818 0.539 1.366 1.041 1.366h152.427c0.502 0 1.042-0.548 1.042-1.366v-263.444c0-9.849 7.984-17.834 17.834-17.834s17.834 7.985 17.834 17.834v263.444c-0.001 20.419-16.469 37.034-36.71 37.034z"  ></path>'+
      ''+
      '<path d="M804.822 491.971c-3.685 0-7.404-1.137-10.594-3.497l-283.146-209.514c-0.334-0.249-0.667-0.249-0.983-0.017l-283.163 209.531c-7.919 5.856-19.086 4.185-24.944-3.732-5.858-7.915-4.189-19.083 3.727-24.944l283.146-209.514c12.985-9.627 30.453-9.636 43.453 0.017l283.125 209.498c7.916 5.859 9.586 17.028 3.727 24.944-3.498 4.729-8.889 7.227-14.35 7.227z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-arrownext1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M511.999 958.877c239.549 0 433.757-194.208 433.757-433.79 0-239.549-194.208-433.758-433.757-433.758-239.549 0-433.756 194.208-433.756 433.758 0 239.582 194.207 433.79 433.756 433.79zM511.999 126.030c220.047 0 399.056 179.026 399.057 399.056 0 220.064-179.009 399.089-399.056 399.089-220.029 0-399.056-179.025-399.056-399.089 0-220.029 179.027-399.056 399.056-399.056z"  ></path>'+
      ''+
      '<path d="M395.8 531.897l150.664 149.883 24.467-24.635-138.295-137.549 126.84-126.569-24.535-24.568-151.272 151.001 12.266 12.302z"  ></path>'+
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

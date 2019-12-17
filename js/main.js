let tabs = (function () {
  return function (selector, config) {
   let _tabsContainer = (typeof selector === "string" ? document.querySelector(selector) : selector);
   let _showTab = function (tabsLinkTarget) {
let tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'))
let tabsLinkActive = tabsLinkTarget.parentElement.querySelector(".tabs__Link_active");
let tabsPaneShow = tabsPaneTarget.parentElement.querySelector(".tabs__pane_show");
       if (tabsLinkTarget === tabsLinkActive){
           return;
       }
       if (tabsLinkActive !== null) {
           tabsLinkActive.classList.remove('tabs__link_active');
       }
       if (tabsPaneShow !== null) {
           tabsPaneShow.classList.remove('tabs__pane_show');
       }
       tabsLinkTarget.classList.add('tabs__link_active');
       tabsPaneTarget.classList.add('tabs__pane_show');
    let eventTabShow = new CustomEvent('tab.show', {bubles: true, detail: { tabsLinkPrevious: tabsLinkActive} });
       tabsLinkTarget.dispatchEvent(eventTabShow);
        }
    let _switchTabTo = function (tabsLinkIndex) {
        let  tabsLinks = _tabsContainer.querySelectorAll(".tabs__link");
        if (tabsLinks.length > 0) {
            if (tabsLinkIndex > tabsLinks.length) {
                tabsLinkIndex = tabsLinks.length;
            } else if (tabsLinkIndex < 1) {
                tabsLinkIndex = 1;
            }
            _showTab(tabsLinks[tabsLinkIndex - 1]);
        }
    }
    let _setupListeners = function () {
        _tabsContainer.addEventListener("click", function (e) {
            let tabsLinkTarget = e.target;
            if (!tabsLinkTarget.classList.contains('tabs__link')) {
                return
            }
            e.preventDefault();
            _showTab(tabsLinkTarget);
        });
    }
    _setupListeners();
      return {
          switchTabTo: function (index) {
              _switchTabTo(index);
          }
      }
    } 
}());
tabs(".tabs");








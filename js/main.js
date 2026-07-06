(function () {
  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const tabPanels = document.querySelectorAll('[data-tab-panel]');

  if (!tabButtons.length || !tabPanels.length) return;

  function activateTab(targetId) {
    tabButtons.forEach((button) => {
      const isSelected = button.dataset.tabTarget === targetId;
      button.setAttribute('aria-selected', String(isSelected));
    });

    tabPanels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.dataset.tabPanel === targetId);
    });
  }

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activateTab(button.dataset.tabTarget);
    });
  });

  const hash = window.location.hash.replace('#', '');
  const validTabs = Array.from(tabButtons).map((b) => b.dataset.tabTarget);
  if (validTabs.includes(hash)) {
    activateTab(hash);
  }
})();

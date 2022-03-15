let mode = window.localStorage.getItem('mode'),
  root = document.getElementsByTagName('html')[0];
if (mode !== undefined && mode === 'dark') {
  root.classList.add('dark-mode');
} else {
  root.classList.remove('dark-mode');
}

(function () {
  window.onload = function () {
    const preloader = document.querySelector('.page-loading');
    preloader.classList.remove('active');
    setTimeout(function () {
      preloader.remove();
    }, 1000);
  };
})();

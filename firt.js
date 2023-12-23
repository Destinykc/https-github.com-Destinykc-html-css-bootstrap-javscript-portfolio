window.onscroll = () => {
  let newProgressWidth =
    (window.pageYOffset / document.body.scrollHeight) * 100;
  document.querySelector(".progress").style.width = `${newProgressWidth}%`;
};

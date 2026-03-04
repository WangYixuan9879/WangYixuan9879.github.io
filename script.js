// 选择所有 href 以 # 开头的导航链接
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // 阻止默认跳转行为

    const targetId = link.getAttribute('href').slice(1); // 去掉前面的 #
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // 平滑滚动
        block: 'start'
      });
    }
  });
});
const heroButton = document.querySelector('#hero button');

if (heroButton) {
  heroButton.addEventListener('click', () => {
    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      experienceSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (!backToTopBtn) return;

  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
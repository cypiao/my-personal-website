document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
  
    // 检查本地存储中的主题设置
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
    }
  
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      
      // 保存主题设置到本地存储
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  
    // 检查系统颜色方案
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    function handleColorSchemeChange(e) {
      if (e.matches) {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
    }
  
    prefersDarkScheme.addListener(handleColorSchemeChange);
    handleColorSchemeChange(prefersDarkScheme);
  });
// 页面模块切换
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-page');

    // 清除当前激活
    navLinks.forEach(l => l.classList.remove('active'));
    pages.forEach(p => p.classList.remove('active'));

    // 激活新模块
    document.getElementById(target).classList.add('active');
    link.classList.add('active');
  });
});

// Chart.js 折线图
const ctx = document.getElementById('salesChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales ($)',
      data: [12000, 15000, 11000, 18000, 22000, 26000],
      borderColor: '#4caf50',
      backgroundColor: 'rgba(76, 175, 80, 0.1)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// 字体大小切换按钮
document.querySelectorAll('#fontSizeBtns button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#fontSizeBtns button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const size = btn.dataset.size;
    let fontSize = '16px';
    if (size === 'small') fontSize = '14px';
    if (size === 'large') fontSize = '18px';
    document.documentElement.style.setProperty('--font-size', fontSize);
  });
});

// 主题切换按钮
document.querySelectorAll('#themeBtns button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#themeBtns button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const theme = btn.dataset.theme;
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });
});

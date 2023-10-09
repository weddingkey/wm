document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const sidebar = document.querySelector(".sidebar");

  // 初始时将侧边栏设置为关闭状态
  sidebar.style.left = "-250px";

  menuIcon.addEventListener("click", function () {
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-250px";
    } else {
      sidebar.style.left = "0";
    }
  });

  // 关闭侧边栏函数
  function closeSidebar() {
    sidebar.style.left = "-250px";
  }

  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && event.target !== menuIcon) {
      closeSidebar();
    }
  });

  const sidebarItems = document.querySelectorAll(".sidebar-menu li a");
  sidebarItems.forEach(item => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const targetBlock = document.querySelector(this.getAttribute("href"));

      if (targetBlock) {
        window.scrollTo({
          top: targetBlock.offsetTop,
          behavior: "smooth"
        });
      }

      closeSidebar();
    });
  });
});



$(document).ready(function() {
  const slides = $(".slide");
  const slideButtons = $(".slide-button");
  let currentIndex = 0;

  function showSlide(index) {
    slides.hide();
    slides.eq(index).show();
  }

  function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
      currentIndex = index;
      showSlide(currentIndex);
    }
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  slideButtons.click(function(e) {
    e.preventDefault();
    const target = $(this).attr("href");
    const targetOffset = $(target).offset().top;
    $("html, body").animate({ scrollTop: targetOffset }, 1000);
  });

  // 初始化显示第一张轮播图
  showSlide(currentIndex);

  // 设置定时器，每3秒切换到下一张轮播图
  setInterval(nextSlide, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll(".menu-item");
  const pages = document.querySelectorAll(".page");

  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      const selectedPage = item.getAttribute("data-page");
      pages.forEach(page => {
        if (page.id === selectedPage) {
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });
      menuItems.forEach(menuItem => {
        if (menuItem === item) {
          menuItem.classList.add("active");
        } else {
          menuItem.classList.remove("active");
        }
      });
    });
  });
});



 // 获取所有的 .page 元素
const pages = document.querySelectorAll('.page');

// 遍历每个 .page 元素
pages.forEach((page) => {
  // 获取当前 .page 元素内的图片轮播和按钮
  const imgContainer = page.querySelector('.img .image-container');
  const prevButton = page.querySelector('.prev-button');
  const nextButton = page.querySelector('.next-button');
  
  let currentIndex = 0; // 当前显示的图片索引
  
  // 获取当前 .page 元素内的所有图片
  const images = imgContainer.querySelectorAll('img');
  
  // 隐藏除第一张图片外的所有图片
  for (let i = 1; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  // 点击下一张按钮
  nextButton.addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
  });

  // 点击上一张按钮
  prevButton.addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].style.display = 'block';
  });

 // 图片点击事件，显示原图
  images.forEach(function(image) {
    image.addEventListener("click", function() {
      var imageUrl = image.getAttribute("src");
      window.open(imageUrl, "_blank");
    });
  });
});


// JavaScript 代码
const images = document.querySelectorAll('.img img');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close-button');

images.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.src = image.src;
  });
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


// JavaScript
const gotoCartButton = document.getElementById('goto-cart-button');

gotoCartButton.addEventListener('click', () => {
    // 在这里添加跳转到购物车页面的代码
    window.open('car.html', '_blank');
});

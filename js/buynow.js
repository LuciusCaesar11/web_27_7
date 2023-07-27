// Lấy tham chiếu đến phần tử loading
const loadingElement = document.getElementById('loading');

// Hàm để xóa hiệu ứng loading
function removeLoading() {
  loadingElement.remove();
}

// Gọi hàm xóa loading sau 3 giây
setTimeout(removeLoading, 2000);



document.addEventListener('DOMContentLoaded', function() {
    // Lấy tất cả các phần tử <li> trong thẻ <ul> có lớp CSS là "list"
    var listItems = document.querySelectorAll('.list ul li');

    // Lặp qua từng phần tử <li>
    listItems.forEach(function(item) {
        // Gắn sự kiện "click" vào từng phần tử <li>
        item.addEventListener('click', function() {
            // Lấy phần tử <a> đầu tiên bên trong phần tử <li> được nhấp chuột
            var link = this.querySelector('a');

            // Kiểm tra xem có phần tử <a> được tìm thấy hay không
            if (link) {
                // Chuyển hướng trình duyệt đến đường dẫn của phần tử <a>
                window.location.href = link.href;
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  // Lấy tất cả các phần tử <li> trong thẻ <ul> có lớp CSS là "list"
  var listItems1 = document.querySelectorAll('.list1 ul li');

  // Lặp qua từng phần tử <li>
  listItems1.forEach(function(item) {
      // Gắn sự kiện "click" vào từng phần tử <li>
      item.addEventListener('click', function() {
          // Lấy phần tử <a> đầu tiên bên trong phần tử <li> được nhấp chuột
          var link = this.querySelector('a');

          // Kiểm tra xem có phần tử <a> được tìm thấy hay không
          if (link) {
              // Chuyển hướng trình duyệt đến đường dẫn của phần tử <a>
              window.location.href = link.href;
          }
      });
  });
});
var bannerImg = document.getElementById('bannerImg');
//tạo 1 mảng các link ảnh
var images = ['./img/shop_page/flash_sale/banner_1.jpg', './img/shop_page/flash_sale/banner_2.jpg']; // Mảng chứa đường dẫn tới các hình ảnh mới
var currentIndex = 0; // Chỉ số của ảnh hiện tại trong mảng

function changeImage() {
    bannerImg.src = images[currentIndex]; // Thay đổi đường dẫn của ảnh hiện tại

    bannerImg.classList.add('flash-effect'); // Thêm lớp flash-effect để tạo hiệu ứng chớp flash

    setTimeout(function() {
        bannerImg.classList.remove('flash-effect'); // Xóa lớp flash-effect sau một khoảng thời gian (ví dụ: 1 giây)
    }, 1000);

    currentIndex = (currentIndex + 1) % images.length; // Tăng chỉ số và quay trở lại 0 nếu đã đến ảnh cuối cùng
}

setInterval(changeImage, 5000); // Gọi hàm changeImage sau mỗi khoảng thời gian (ví dụ: 5 giây)

var button2 = document.querySelector('.button2');
button2.addEventListener('click', function() {
    // Thay đổi hình ảnh khi click
    bannerImg.src = './img/shop_page/flash_sale/banner_1.jpg'; // Đường dẫn tới hình ảnh mới
    bannerImg.classList.add('flash-effect'); // Thêm lớp flash-effect để tạo hiệu ứng chớp flash

    setTimeout(function() {
        bannerImg.classList.remove('flash-effect'); // Xóa lớp flash-effect sau một khoảng thời gian (ví dụ: 1 giây)
      }, 1000);
}) ; 

var button1 = document.querySelector('.button1');
button1.addEventListener('click', function() {
    // Thay đổi hình ảnh khi click
    var bannerImg = document.getElementById('bannerImg');
    bannerImg.src = './img/shop_page/flash_sale/banner_2.jpg'; // Đường dẫn tới hình ảnh mới
    bannerImg.classList.add('flash-effect'); // Thêm lớp flash-effect để tạo hiệu ứng chớp flash

    setTimeout(function() {
        bannerImg.classList.remove('flash-effect'); // Xóa lớp flash-effect sau một khoảng thời gian (ví dụ: 1 giây)
      }, 1000);
}) ;

//js cho event flash sale timer
// Đặt ngày đích mà bạn muốn đếm ngược đến
var targetDate = new Date("2023-08-01T00:00:00Z");

// Lấy các phần tử div cho ngày, giờ, phút và giây
var daysElements = document.querySelectorAll(".box_days span");
var hoursElements = document.querySelectorAll(".box_hours span");
var minsElements = document.querySelectorAll(".box_mins span");
var secsElements = document.querySelectorAll(".box_secs span");

// Gán sự kiện updateCountdown cho từng phần tử
for (var i = 0; i < daysElements.length; i++) {
    var daysElement = daysElements[i];
    var hoursElement = hoursElements[i];
    var minsElement = minsElements[i];
    var secsElement = secsElements[i];

    setInterval(updateCountdown, 1000, daysElement, hoursElement, minsElement, secsElement);
}

function updateCountdown(daysElement, hoursElement, minsElement, secsElement) {
    // Lấy thời gian hiện tại
    var currentDate = new Date();

    // Tính toán số giây còn lại
    var totalSeconds = Math.floor((targetDate - currentDate) / 1000);

    // Tính toán số ngày, giờ, phút và giây còn lại
    var days = Math.floor(totalSeconds / (3600 * 24));
    var hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    var mins = Math.floor((totalSeconds % 3600) / 60);
    var secs = Math.floor(totalSeconds % 60);

    // Hiển thị số ngày, giờ, phút và giây trên giao diện
    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minsElement.textContent = formatTime(mins);
    secsElement.textContent = formatTime(secs);
}

function formatTime(time) {
    // Định dạng thời gian thành chuỗi hai chữ số (vd: 05)
    return time < 10 ? "0" + time : time;
}

document.addEventListener('DOMContentLoaded', function() {
    const productsContainers = document.querySelectorAll('.products');
    const blockPrevs = document.querySelectorAll('.block_prev');
    const blockNexts = document.querySelectorAll('.block_next');
  
    // Lặp qua từng phần tử và gán sự kiện onclick
    blockPrevs.forEach((blockPrev, index) => {
      const productsContainer = productsContainers[index];
  
      blockPrev.onclick = function() {
        const scrollAmount = -250; // Điều chỉnh khoảng cách scroll
        productsContainer.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      };
    });
  
    // Lặp qua từng phần tử và gán sự kiện onclick
    blockNexts.forEach((blockNext, index) => {
      const productsContainer = productsContainers[index];
  
      blockNext.onclick = function() {
        const scrollAmount = 250; // Điều chỉnh khoảng cách scroll
        productsContainer.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });
      };
    });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    var menu = document.querySelector('.menu');
    var pseudo = document.querySelector('.quick_choices');
    var icon_menu = document.querySelector('.menu i');

    menu.addEventListener('click', function () {
        if (pseudo.style.display === 'none') {
            pseudo.style.display = 'block';
            icon_menu.classList.remove('fa-bars');
            icon_menu.classList.add('fa-x');
        } else {
            pseudo.style.display = 'none';
            icon_menu.classList.remove('fa-x');
            icon_menu.classList.add('fa-bars');
        }
    });
});


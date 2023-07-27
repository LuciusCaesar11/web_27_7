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






var countProducts1=document.querySelectorAll('.product');
var count=0;

function countProducts() {
    for (var i=0; i<countProducts1.length; i++)
        count++;
}

var textCounProducts=document.querySelector('.title_count span')
countProducts();
textCounProducts.textContent=count+' sản phẩm';

document.addEventListener('DOMContentLoaded', function() {
  // Lấy danh sách các checkbox lọc giá
  const priceCheckboxes = document.querySelectorAll('.list_check_price input[type="checkbox"]');
  
  // Lắng nghe sự kiện "change" trên các checkbox lọc giá
  priceCheckboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      handlePriceFilter();
      updateSortText('Mặc định');
    });
  });
  
  // Lấy thẻ "mặc định"
  const defaultSortItem = document.querySelector('.list_status_sort li:first-child');
  
  // Gắn sự kiện "click" cho thẻ "mặc định"
  defaultSortItem.addEventListener('click', function() {
    resetSort();
    handlePriceFilter();
    updateSortText(defaultSortItem.textContent.trim());
  });
  
  // Lấy thẻ "sắp xếp tăng dần"
  const ascendingSortItem = document.querySelector('.list_status_sort li:nth-child(2)');
  
  // Gắn sự kiện "click" cho thẻ "sắp xếp tăng dần"
  ascendingSortItem.addEventListener('click', function() {
    sortProducts('asc');
    updateSortText(ascendingSortItem.textContent.trim());
  });
  
  // Lấy thẻ "sắp xếp giảm dần"
  const descendingSortItem = document.querySelector('.list_status_sort li:nth-child(3)');
  
  // Gắn sự kiện "click" cho thẻ "sắp xếp giảm dần"
  descendingSortItem.addEventListener('click', function() {
    sortProducts('desc');
    updateSortText(descendingSortItem.textContent.trim());
  });
  
  // Lấy danh sách sản phẩm ban đầu
  const productList = document.querySelector('.products');
  const initialProducts = Array.from(productList.querySelectorAll('.wrapper_product'));
  
  // Mảng lưu trữ danh sách sản phẩm được lọc hiện tại
  let filteredProducts = [];
  
  // Hàm xử lý lọc sản phẩm theo giá
  function handlePriceFilter() {
    // Lấy mức giá được chọn
    const selectedPrice = Array.from(priceCheckboxes)
      .filter(function(checkbox) {
        return checkbox.checked;
      })
      .map(function(checkbox) {
        return checkbox.nextElementSibling.textContent.trim();
      });
  
    // Kiểm tra nếu không có checkbox nào được chọn thì hiển thị tất cả sản phẩm
    if (selectedPrice.length === 0) {
      filteredProducts = initialProducts;
    } else {
      // Lọc sản phẩm dựa trên mức giá được chọn
      filteredProducts = initialProducts.filter(function(product) {
        const price = parseInt(product.querySelector('.text_content1 p').textContent.replace('.', '').replace('đ', ''));
  
        return selectedPrice.some(function(priceRange) {
          if (priceRange === 'Giá dưới 100.000đ' && price < 100000) {
            return true;
          } else if (priceRange === '100.000đ - 200.000đ' && price >= 100000 && price <= 200000) {
            return true;
          } else if (priceRange === '200.000đ - 500.000đ' && price > 200000 && price <= 500000) {
            return true;
          } else if (priceRange === 'Giá trên 500.000đ' && price > 500000) {
            return true;
          }
          return false;
        });
      });
    }
  
    // Hiển thị các sản phẩm tương ứng
    displayFilteredProducts(filteredProducts);
  }
  
  // Hàm hiển thị các sản phẩm tương ứng
  function displayFilteredProducts(products) {
    // Xóa các sản phẩm hiện tại
    while (productList.firstChild) {
      productList.removeChild(productList.firstChild);
    }
  
    // Hiển thị các sản phẩm đã lọc
    products.forEach(function(product) {
      productList.appendChild(product);
    });
  }
  
  // Hàm reset thứ tự sản phẩm về mặc định
  function resetSort() {
    // Xóa các sản phẩm hiện tại
    while (productList.firstChild) {
      productList.removeChild(productList.firstChild);
    }
  
    // Thêm lại các sản phẩm ban đầu vào danh sách
    initialProducts.forEach(function(product) {
      productList.appendChild(product);
    });
  }
  
  // Hàm sắp xếp sản phẩm
  function sortProducts(sortType) {
    // Lấy danh sách sản phẩm hiện tại
    const currentProducts = Array.from(productList.querySelectorAll('.wrapper_product'));
  
    // Sắp xếp mảng sản phẩm
    const sortedProducts = currentProducts.sort(function(a, b) {
      const priceA = parseInt(a.querySelector('.text_content1 p').textContent.replace('.', '').replace('đ', ''));
      const priceB = parseInt(b.querySelector('.text_content1 p').textContent.replace('.', '').replace('đ', ''));
      return priceA - priceB;
    });
  
    // Kiểm tra nếu sắp xếp giảm dần thì đảo ngược danh sách sản phẩm
    if (sortType === 'desc') {
      sortedProducts.reverse();
    }
  
    // Hiển thị sản phẩm theo thứ tự đã sắp xếp
    displayFilteredProducts(sortedProducts);
  }
  
  // Hàm cập nhật text trong class edit_text
  function updateSortText(text) {
    const editText = document.querySelector('.edit_text span');
    editText.textContent = text;
  }
  
  // Khởi động mặc định
  resetSort();
  handlePriceFilter();
});


//điều chỉnh icon trên menu navbar nhanh
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
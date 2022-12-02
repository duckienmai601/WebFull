// const itemsliderbar = document.querySelectorAll(".ca_li")
// itemsliderbar.forEach(function(menu,index){
//     menu.addEventListener("click",function(){
//         menu.classList.toggle("block")
//     })
// })


// ------------------------------- paging -------------------------------
const  product = [
  { 
      id: 1,
      link: "/SanPham/html/category/detail_item/Ban/ban1.html",
      image: "/SanPham/img/category/Ban/cafe-tron-go-dep.png", 
      title: "Bàn cafe tròn gỗ đẹp", 
      price: "4500000", 
      amount: "24", 
      category: "BanGo", 
      status: "Còn hàng", 
      code: "ban1"
  },
  { 
      id: 2,
      link: "/SanPham/html/category/detail_item/Ban/ban2.html",
      image: "/SanPham/img/category/Ban/GTY-091.png", 
      title: "Bàn GTY 091", 
      price: "3500000", 
      amount: "45", 
      category: "BanGo", 
      status: "Còn hàng", 
      code: "ban2"
  },
  { 
      id: 3,
      link: "/SanPham/html/category/detail_item/Ban/ban3.html",
      image: "/SanPham/img/category/Ban/tron-kinh.png", 
      title: "Bàn tròn kính", 
      price: "23000000", 
      amount: "54", 
      category: "BanGo", 
      status: "Còn hàng", 
      code: "ban3"
  },
  { 
      id: 4,
      link: "/SanPham/html/category/detail_item/Ban/ban4.html",
      image: "/SanPham/img/category/Ban/go-dai.png", 
      title: "Bàn gỗ dài", 
      price: "1890000", 
      amount: "16", 
      category: "BanGo", 
      status: "Còn hàng", 
      code: "ban4"
  },
  { 
      id: 5,
      link: "/SanPham/html/category/detail_item/den_trang_tri/den1.html",
      image: "/SanPham/img/category/DenTrangTri/Netviet-NV-8825.png", 
      title: "Đèn trang trí vách cao cấp NETVIET NV 8825", 
      price: "780000", 
      amount: "12", 
      category: "DenTrangTri", 
      status: "Còn hàng", 
      code: "den1"
  },
  { 
      id: 6,
      link: "/SanPham/html/category/detail_item/den_trang_tri/den2.html",
      image: "/SanPham/img/category/DenTrangTri/Netviet-NV-9005-2.png", 
      title: "Đèn trang trí vách cao cấp pha lê Netviet NV 9005/2", 
      price: "970000", 
      amount: "102", 
      category: "DenTrangTri", 
      status: "Còn hàng", 
      code: "den2"
  },
  { 
      id: 7,
      link: "/SanPham/html/category/detail_item/den_trang_tri/den3.html",
      image: "/SanPham/img/category/DenTrangTri/Composite-AP-B948.png", 
      title: "Đèn tường Composite An Phước B948", 
      price: "10000000", 
      amount: "87", 
      category: "DenTrangTri", 
      status: "Còn hàng", 
      code: "den3"
  },
  { 
      id: 8,
      link: "/SanPham/html/category/detail_item/den_trang_tri/den4.html",
      image: "/SanPham/img/category/DenTrangTri/Netviet-NV-8205-1.png", 
      title: "Đèn trang trí vách Netviet NV 8205/1", 
      price: "590000", 
      amount: "92", 
      category: "DenTrangTri", 
      status: "Còn hàng", 
      code: "den4"
  },
  { 
      id: 9,
      link: "/SanPham/html/category/detail_item/giuong_ngu/giuong1.html",
      image: "/SanPham/img/category/GiuongNgu/Bellasofa-BS701.png", 
      title: "Giường Bellasofa BS701", 
      price: "11000000", 
      amount: "5", 
      category: "GiuongNgu", 
      status: "Còn hàng", 
      code: "giuong1"
  },
  { 
      id: 10,
      link: "/SanPham/html/category/detail_item/giuong_ngu/giuong2.html",
      image: "/SanPham/img/category/GiuongNgu/Furniland-01.png", 
      title: "Giường ngủ FURNILAND - Jangin Haim (1.8m)", 
      price: "5400000", 
      amount: "11", 
      category: "GiuongNgu", 
      status: "Còn hàng", 
      code: "giuong2"
  },
  { 
      id: 11,
      link: "/SanPham/html/category/detail_item/giuong_ngu/giuong3.html",
      image: "/SanPham/img/category/GiuongNgu/Furniland-02.png", 
      title: "Giường ngủ FURNILAND - Jangin Christine (1m8)", 
      price: "12000000", 
      amount: "4", 
      category: "GiuongNgu", 
      status: "Còn hàng", 
      code: "giuong3"
  },
  { 
      id: 12,
      link: "/SanPham/html/category/detail_item/giuong_ngu/giuong4.html",
      image: "/SanPham/img/category/GiuongNgu/Bellasofa-B1239.png", 
      title: "Giường Bellasofa B1239", 
      price: "9000000", 
      amount: "12", 
      category: "GiuongNgu", 
      status: "Còn hàng", 
      code: "giuong4"
  },
  { 
      id: 13,
      link: "/SanPham/html/category/detail_item/ke_sach/ke1.html",
      image: "/SanPham/img/category/KeSach/go-4-tang-40.png", 
      title: "Kệ sách gỗ 4 tầng 40", 
      price: "510000", 
      amount: "12", 
      category: "KeSach", 
      status: "Còn hàng", 
      code: "ke1"
  },
  { 
      id: 14,
      link: "/SanPham/html/category/detail_item/ke_sach/ke2.html",
      image: "/SanPham/img/category/KeSach/BOV-SPR-1980DK.png", 
      title: "Kệ sách BIG ONE VIETNAM SPR-1980DK", 
      price: "460000", 
      amount: "32", 
      category: "KeSach", 
      status: "Còn hàng", 
      code: "ke2"
  },
  { 
      id: 15,
      link: "/SanPham/html/category/detail_item/ke_sach/ke3.html",
      image: "/SanPham/img/category/KeSach/RubikMH-1846.png", 
      title: "Kệ trang trí Rubik Modulo Home 1846", 
      price: "1100000", 
      amount: "17", 
      category: "KeSach", 
      status: "Còn hàng", 
      code: "ke3"
  },
  { 
      id: 16,
      link: "/SanPham/html/category/detail_item/ke_sach/ke4.html",
      image: "/SanPham/img/category/KeSach/treo-Hurakids-2130-001.png", 
      title: "Giá sách treo Hurakids 2130-001", 
      price: "598000", 
      amount: "18", 
      category: "KeSach", 
      status: "Còn hàng", 
      code: "ke4"
  },
  { 
      id: 17,
      link: "/SanPham/html/category/detail_item/phong_tam/tam1.html",
      image: "/SanPham/img/category/PhongTam/thanh-treo-giay.png", 
      title: "Thanh treo giấy vệ sinh", 
      price: "150000", 
      amount: "98", 
      category: "PhongTam", 
      status: "Còn hàng", 
      code: "phongtam1"
  },
  { 
      id: 18,
      link: "/SanPham/html/category/detail_item/phong_tam/tam2.html",
      image: "/SanPham/img/category/PhongTam/thanh-treo-khan.png", 
      title: "Thanh sắt treo khăn", 
      price: "109000", 
      amount: "124", 
      category: "PhongTam", 
      status: "Còn hàng", 
      code: "phongtam2"
  },
  { 
      id: 19,
      link: "/SanPham/html/category/detail_item/phong_tam/tam3.html",
      image: "/SanPham/img/category/PhongTam/ke-xa-phong.png", 
      title: "Kệ chứa xà phòng", 
      price: "190000", 
      amount: "201", 
      category: "PhongTam", 
      status: "Còn hàng", 
      code: "phongtam3"
  },
  { 
      id: 20,
      link: "/SanPham/html/category/detail_item/phong_tam/tam4.html",
      image: "/SanPham/img/category/PhongTam/den-DTY.png", 
      title: "Bóng đèn DTY", 
      price: "80000", 
      amount: "189", 
      category: "PhongTam", 
      status: "Còn hàng", 
      code: "phongtam4"
  },
  { 
      id: 21,
      link: "/SanPham/html/category/detail_item/rem_cua/rem1.html",
      image: "/SanPham/img/category/RemCua/num-01.png", 
      title: "Rèm cửa 01", 
      price: "900000", 
      amount: "26", 
      category: "RemCua", 
      status: "Còn hàng", 
      code: "rem1"
  },
  { 
      id: 22,
      link: "/SanPham/html/category/detail_item/rem_cua/rem2.html",
      image: "/SanPham/img/category/RemCua/num-02.png", 
      title: "Rèm cửa 02", 
      price: "890000", 
      amount: "38", 
      category: "RemCua", 
      status: "Còn hàng", 
      code: "rem2"
  },
  { 
      id: 23,
      link: "/SanPham/html/category/detail_item/rem_cua/rem3.html",
      image: "/SanPham/img/category/RemCua/num-03.png", 
      title: "Rèm cửa 03", 
      price: "750000", 
      amount: "65", 
      category: "RemCua", 
      status: "Còn hàng", 
      code: "rem3"
  },
  { 
      id: 24,
      link: "/SanPham/html/category/detail_item/rem_cua/rem4.html",
      image: "/SanPham/img/category/RemCua/num-04.png", 
      title: "Rèm cửa 04", 
      price: "950000", 
      amount: "87", 
      category: "RemCua", 
      status: "Còn hàng", 
      code: "rem4"
  },
  { 
      id: 25,
      link: "/SanPham/html/category/detail_item/sofa/sofa1.html",
      image: "/SanPham/img/category/Sofa/kem.png", 
      title: "Ghế sofa kem", 
      price: "2500000", 
      amount: "43", 
      category: "GheSofa", 
      status: "Còn hàng", 
      code: "sofa1"
  },
  { 
      id: 26,
      link: "/SanPham/html/category/detail_item/sofa/sofa2.html",
      image: "/SanPham/img/category/Sofa/cafe.png", 
      title: "Sofa cafe", 
      price: "2300000", 
      amount: "12", 
      category: "GheSofa", 
      status: "Còn hàng", 
      code: "sofa2"
  },
  { 
      id: 27,
      link: "/SanPham/html/category/detail_item/sofa/sofa3.html",
      image: "/SanPham/img/category/Sofa/don-em-ai.png", 
      title: "Ghế sofa đơn êm ái", 
      price: "2600000", 
      amount: "2", 
      category: "GheSofa", 
      status: "Còn hàng", 
      code: "sofa3"
  },
  { 
      id: 28,
      link: "/SanPham/html/category/detail_item/sofa/sofa4.html",
      image: "/SanPham/img/category/Sofa/don-SFD18.png", 
      title: "Sofa đơn SFD18", 
      price: "5100000", 
      amount: "12", 
      category: "GheSofa", 
      status: "Còn hàng", 
      code: "sofa4"
  },
  { 
      id: 29,
      link: "/SanPham/html/category/detail_item/tu_quan_ao/tu1.html",
      image: "/SanPham/img/category/TuQuanAo/BOV-WVR-1855L.png", 
      title: "Tủ quần áo BIG ONE VIETNAM WVR-1855L", 
      price: "4000000", 
      amount: "3", 
      category: "TuQuanAo", 
      status: "Còn hàng", 
      code: "tu1"
  },
  { 
      id: 30,
      link: "/SanPham/html/category/detail_item/tu_quan_ao/tu2.html",
      image: "/SanPham/img/category/TuQuanAo/B1241K.png", 
      title: "Tủ áo B1241K", 
      price: "5400000", 
      amount: "7", 
      category: "TuQuanAo", 
      status: "Còn hàng", 
      code: "tu2"
  },
  { 
      id: 31,
      link: "/SanPham/html/category/detail_item/tu_quan_ao/tu3.html",
      image: "/SanPham/img/category/TuQuanAo/Bellasofa-B1239.png", 
      title: "Tủ Áo Bellasofa B1239", 
      price: "3790000", 
      amount: "11", 
      category: "TuQuanAo", 
      status: "Còn hàng", 
      code: "tu3"
  },
  { 
      id: 32,
      link: "/SanPham/html/category/detail_item/tu_quan_ao/tu4.html",
      image: "/SanPham/img/category/TuQuanAo/B1238.png", 
      title: "Tủ áo B1238", 
      price: "5100000", 
      amount: "1", 
      category: "TuQuanAo", 
      status: "Còn hàng", 
      code: "tu4"
  },
]

// let perPage = 12,
//     currentPage = 1,
//     start = 0,
//     end = perPage,
//     totalPage = 0

// function getCurrentPage() {
//     start = (currentPage - 1) * perPage;
//     end = currentPage * perPage;
// }

let perPage = 12,
  currentPage = 1,
  start = 0,
  end = perPage;

function getCurrentPage() {
  start = (currentPage - 1) * perPage;
  end = currentPage * perPage;
} 

function renderProduct() {
  html = '';
  const content = product.map((item, index) => {
      if(index >= start && index < end) {
          html += '<div class="lazyload col-6 col-sm-6 col-md-4 col-lg-4">';
          html += '<div class="lazyload_item popup category_right_content_item">'
          html += '<img src=' + item.image + '>';
          html += '<h5>' + '<a href="' + item.link + '">' + item.title + '</a>' + '</h5>';
          html += '<p>' + item.price + '<u>đ</u></p>';
          html += '<ul class="popup_item">';
          html += '<a href="" title="Mua hàng"><li class="fas fa-cart-shopping"></li></a>';
          html += '<a href="' + item.link + '" title="Chi tiết"><li class="fas fa-eye"></li></a>';
          html += '</ul>';
          html += '</div>';
          html += '</div>';
      }
  })
  document.getElementById('product').innerHTML = html;
}
renderProduct();

const pageNext = document.querySelector('.page_btn_next');
const pagePrev = document.querySelector('.page_btn_prev');
const totalPages = Math.ceil(product.length / perPage);

function renderListPage() {
  let html = '';
  html += `<li class="active"><a class="page-link"> ${1} </a></li>`;
  for(let i=2;i<=totalPages;i++) {
      html += `<li><a class="page-link"> ${i} </a></li>`;
  }
  document.getElementById('number_page').innerHTML = html;
}
renderListPage();

function changePage() {
  const currentPage2 = document.querySelectorAll('.number_page li');
  for(let i=0;i<currentPage2.length;i++) {
      currentPage2[i].addEventListener('click', () => {
          let value = i + 1;
          currentPage = value;
          $('.number_page li').removeClass('active');
          currentPage2[i].classList.add('active');
          // if (currentPage > 1 && currentPage < totalPages) {
          //     $('.page_btn_next').removeClass('page_btn_active');
          //     $('.page_btn_next').removeClass('page_btn_active');
          // }
          // if(currentPage === 1) {
          //     $('.page_btn_prev').addClass('page_btn_active');
          // }
          // if(currentPage === totalPages) {
          //     $('.page_btn_next').addClass('page_btn_active');
          // }
          getCurrentPage(currentPage);
          renderProduct();
      })
  }
}
changePage();

pageNext.addEventListener('click', () => {
  currentPage++;
  if(currentPage > totalPages) {
      currentPage = totalPages;
  }
  // if(currentPage === totalPages) {
  //     $('.page_btn_next').addClass('page_btn_active');
  // }
  // $('.page_btn_next').removeClass('page_btn_active');
  $('.number_page li').removeClass('active');
  $(`.number_page li:eq(${currentPage - 1})`).addClass('active');
  getCurrentPage(currentPage);
  renderProduct(); 
})
pagePrev.addEventListener('click', () => {
  currentPage--;
  if(currentPage <= 1) {
      currentPage = 1;
  }
  // if(currentPage === 1) {
  //     $('.page_btn_prev').addClass('page_btn_active');
  // }
  // $('.page_btn_prev').removeClass('page_btn_active');
  $('.number_page li').removeClass('active');
  $(`.number_page li:eq(${currentPage - 1})`).addClass('active');
  getCurrentPage(currentPage);
  renderProduct();
})



function listProduct(category_arr=[], price_arr=[]) {
  var listProduct = document.getElementById("product")
  listProduct.innerHTML=''
  for(i=0;i<product.length;i++) {
      link = product[i].link
      image = product[i].image
      title = product[i].title
      price = product[i].price
      category = product[i].category
      if(category_arr.length>0){
          if(category_arr.includes(category)==false) continue
      }
      if(price_arr.length>0){
          if(price < 200000 && price_arr.includes('1')==false) continue
          if(price >= 200000 && price < 1000000 && price_arr.includes('2')==false) continue
          if(price >= 1000000 && price < 5000000 && price_arr.includes('3')==false) continue
          if(price >= 5000000 && price < 10000000 && price_arr.includes('4')==false) continue
          if(price >= 10000000 && price_arr.includes('5')==false) continue
      }
      listProduct.innerHTML+=`
          <div class="lazyload col-6 col-sm-6 col-md-4 col-lg-4">
              <div class="lazyload_item popup category_right_content_item">
                  <img src="${product[i].image}">
                  <h5><a href="${product[i].link}">${product[i].title}</a></h5>
                  <p>${product[i].price}<u>đ</u></p>
                  <ul class="popup_item">
                      <a href="" title="Mua hàng"><li class="fas fa-cart-shopping"></li></a>
                      <a href="${product[i].link}" title="Chi tiết"><li class="fas fa-eye"></li></a>
                  </ul>
              </div>
          </div>
      `
  }
}
// listProduct()
// const pageNext = document.querySelector('.page_btn_next');
// const pagePrev = document.querySelector('.page_btn_prev');
// const totalPages = Math.ceil(product.length / perPage);

// function renderListPage() {
//     let html = '';
//     html += `<li class="active"><a class="page-link"> ${1} </a></li>`;
//     for(let i=2;i<=totalPages;i++) {
//         html += `<li><a class="page-link"> ${i} </a></li>`;
//     }
//     document.getElementById('number_page').innerHTML = html;
// }
// renderListPage();

// function changePage() {
//     const currentPage2 = document.querySelectorAll('.number_page li');
//     for(let i=0;i<currentPage2.length;i++) {
//         currentPage2[i].addEventListener('click', () => {
//             let value = i + 1;
//             currentPage = value;
//             $('.number_page li').removeClass('active');
//             currentPage2[i].classList.add('active');
//             // if (currentPage > 1 && currentPage < totalPages) {
//             //     $('.page_btn_next').removeClass('page_btn_active');
//             //     $('.page_btn_next').removeClass('page_btn_active');
//             // }
//             // if(currentPage === 1) {
//             //     $('.page_btn_prev').addClass('page_btn_active');
//             // }
//             // if(currentPage === totalPages) {
//             //     $('.page_btn_next').addClass('page_btn_active');
//             // }
//             getCurrentPage(currentPage);
//             renderProduct();
//         })
//     }
// }
// changePage();

// pageNext.addEventListener('click', () => {
//     currentPage++;
//     if(currentPage > totalPages) {
//         currentPage = totalPages;
//     }
//     // if(currentPage === totalPages) {
//     //     $('.page_btn_next').addClass('page_btn_active');
//     // }
//     // $('.page_btn_next').removeClass('page_btn_active');
//     $('.number_page li').removeClass('active');
//     $(`.number_page li:eq(${currentPage - 1})`).addClass('active');
//     getCurrentPage(currentPage);
//     renderProduct();
// })
// pagePrev.addEventListener('click', () => {
//     currentPage--;
//     if(currentPage <= 1) {
//         currentPage = 1;
//     }
//     // if(currentPage === 1) {
//     //     $('.page_btn_prev').addClass('page_btn_active');
//     // }
//     // $('.page_btn_prev').removeClass('page_btn_active');
//     $('.number_page li').removeClass('active');
//     $(`.number_page li:eq(${currentPage - 1})`).addClass('active');
//     getCurrentPage(currentPage);
//     renderProduct();
// })



/*------------------------------- list tung san pham -------------------------------*/
// function renderProduct_Ban() {
//     html = '';
//     const content = product.map((item, index) => {
//         if(index >= 1 && index < 4) {
//             html += '<div class="lazyload col-xs-12 col-sm-6 col-md-4 col-lg-4">';
//             html += '<div class="lazyload_item popup category_right_content_item">'
//             html += '<img src=' + item.image + '>';
//             html += '<h5>' + '<a href="' + item.link + '">' + item.title + '</a>' + '</h5>';
//             html += '<p>' + item.price + '<u>đ</u></p>';
//             html += '<ul class="popup_item">';
//             html += '<a href="" title="Mua hàng"><li class="fas fa-cart-shopping"></li></a>';
//             html += '<a href="' + item.link + '" title="Chi tiết"><li class="fas fa-eye"></li></a>';
//             html += '</ul>';
//             html += '</div>';
//             html += '</div>';
//         }
//     })
//     document.getElementById('product_ban').innerHTML = html;
// }
// renderProduct_Ban();

/*------------------------------- Bộ lọc  -------------------------------*/
function selectProduct(){
  var arr1 = document.getElementsByClassName("category")
  var category_arr = []
  for(i=0; i<arr1.length; i++) {
      if(arr1[i].checked) category_arr.push(arr1[i].value);

  }
  var arr2 = document.getElementsByClassName("price")
  var price_arr = []
  for(i=0; i<arr2.length; i++){
  if(arr2[i].checked == true) price_arr.push(arr2[i].value)
  }
  listProduct(category_arr, price_arr)
  
}

function sortProduct() {
    var valueSelect = document.getElementById("arrange").value
    product.sort((a, b)=> {
        if(valueSelect === "2") {
            return a.price - b.price
        }else if(valueSelect === "1") {
            return b.price - a.price
        }else{
            return a.id - b.id
        }
    })  
    renderProduct()  
  }
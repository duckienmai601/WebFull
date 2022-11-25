const product = [
    { id: 1,link: "/SanPham/html/category/detail_item/Ban/ban1.html", image: "/SanPham/img/category/Ban/cafe-tron-go-dep.png", title: "Bàn cafe tròn gỗ đẹp", price: "4.500.000", amount: "24", category: "Bàn gỗ", status: "Còn hàng", code: "ban1"},
    { id: 2,link: "/SanPham/html/category/detail_item/Ban/ban2.html", image: "/SanPham/img/category/Ban/GTY-091.png", title: "Bàn GTY 091", price: "3.500.000", amount: "45", category: "Bàn gỗ", status: "Còn hàng", code: "ban2"},
    { id: 3,link: "/SanPham/html/category/detail_item/Ban/ban3.html", image: "/SanPham/img/category/Ban/tron-kinh.png", title: "Bàn tròn kính", price: "23.000.000", amount: "54", category: "Bàn gỗ", status: "Còn hàng", code: "ban3"},
    { id: 4,link: "/SanPham/html/category/detail_item/Ban/ban4.html", image: "/SanPham/img/category/Ban/go-dai.png", title: "Bàn gỗ dài", price: "1.890.000", amount: "16", category: "Bàn gỗ", status: "Còn hàng", code: "ban4"},
    { id: 5,link: "/SanPham/html/category/detail_item/den_trang_tri/den1.html", image: "/SanPham/img/category/DenTrangTri/Netviet-NV-8825.png", title: "Đèn trang trí vách cao cấp NETVIET NV 8825", price: "780.000", amount: "12", category: "Đèn trang trí", status: "Còn hàng", code: "den1"},
    { id: 6,link: "/SanPham/html/category/detail_item/den_trang_tri/den2.html", image: "/SanPham/img/category/DenTrangTri/Netviet-NV-9005-2.png", title: "Đèn trang trí vách cao cấp pha lê Netviet NV 9005/2", price: "970.000", amount: "102", category: "Đèn trang trí", status: "Còn hàng", code: "den2"},
    { id: 7,link: "/SanPham/html/category/detail_item/den_trang_tri/den3.html", image: "/SanPham/img/category/DenTrangTri/Composite-AP-B948.png", title: "Đèn tường Composite An Phước B948", price: "10.000.000", amount: "87", category: "Đèn trang trí", status: "Còn hàng", code: "den3"},
    { id: 8,link: "/SanPham/html/category/detail_item/den_trang_tri/den4.html", image: "/SanPham/img/category/DenTrangTri/Netviet-NV-8205-1.png", title: "Đèn trang trí vách Netviet NV 8205/1", price: "590.000", amount: "92", category: "Đèn trang trí", status: "Còn hàng", code: "den4"},
    { id: 9,link: "/SanPham/html/category/detail_item/giuong_ngu/giuong1.html", image: "/SanPham/img/category/GiuongNgu/Bellasofa-BS701.png", title: "Giường Bellasofa BS701", price: "11.000.000", amount: "5", category: "Giường ngủ", status: "Còn hàng", code: "giuong1"},
    { id: 10,link: "/SanPham/html/category/detail_item/giuong_ngu/giuong2.html", image: "/SanPham/img/category/GiuongNgu/Furniland-01.png", title: "Giường ngủ FURNILAND - Jangin Haim (1.8m)", price: "5.400.000", amount: "11", category: "Giường ngủ", status: "Còn hàng", code: "giuong2"},
    { id: 11,link: "/SanPham/html/category/detail_item/giuong_ngu/giuong3.html", image: "/SanPham/img/category/GiuongNgu/Furniland-02.png", title: "Giường ngủ FURNILAND - Jangin Christine (1m8)", price: "12.000.000", amount: "4", category: "Giường ngủ", status: "Còn hàng", code: "giuong3"},
    { id: 12,link: "/SanPham/html/category/detail_item/giuong_ngu/giuong4.html", image: "/SanPham/img/category/GiuongNgu/Bellasofa-B1239.png", title: "Giường Bellasofa B1239", price: "9.000.000", amount: "12", category: "Giường ngủ", status: "Còn hàng", code: "giuong4"},
    { id: 13,link: "/SanPham/html/category/detail_item/ke_sach/ke1.html", image: "/SanPham/img/category/KeSach/go-4-tang-40.png", title: "Kệ sách gỗ 4 tầng 40", price: "510.000", amount: "12", category: "Kệ sách", status: "Còn hàng", code: "ke1"},
    { id: 14,link: "/SanPham/html/category/detail_item/ke_sach/ke2.html", image: "/SanPham/img/category/KeSach/BOV-SPR-1980DK.png", title: "Kệ sách BIG ONE VIETNAM SPR-1980DK", price: "460.000", amount: "32", category: "Kệ sách", status: "Còn hàng", code: "ke2"},
    { id: 15,link: "/SanPham/html/category/detail_item/ke_sach/ke3.html", image: "/SanPham/img/category/KeSach/RubikMH-1846.png", title: "Kệ trang trí Rubik Modulo Home 1846", price: "1.100.000", amount: "17", category: "Kệ sách", status: "Còn hàng", code: "ke3"},
    { id: 16,link: "/SanPham/html/category/detail_item/ke_sach/ke4.html", image: "/SanPham/img/category/KeSach/treo-Hurakids-2130-001.png", title: "Giá sách treo Hurakids 2130-001", price: "598.000", amount: "18", category: "Kệ sách", status: "Còn hàng", code: "ke4"},
    { id: 17,link: "/SanPham/html/category/detail_item/phong_tam/tam1.html", image: "/SanPham/img/category/PhongTam/thanh-treo-giay.png", title: "Thanh treo giấy vệ sinh", price: "150.000", amount: "98", category: "Phòng tắm", status: "Còn hàng", code: "phongtam1"},
    { id: 18,link: "/SanPham/html/category/detail_item/phong_tam/tam2.html", image: "/SanPham/img/category/PhongTam/thanh-treo-khan.png", title: "Thanh sắt treo khăn", price: "109.000", amount: "124", category: "Phòng tắm", status: "Còn hàng", code: "phongtam2"},
    { id: 19,link: "/SanPham/html/category/detail_item/phong_tam/tam3.html", image: "/SanPham/img/category/PhongTam/ke-xa-phong.png", title: "Kệ chứa xà phòng", price: "190.000", amount: "201", category: "Phòng tắm", status: "Còn hàng", code: "phongtam3"},
    { id: 20,link: "/SanPham/html/category/detail_item/phong_tam/tam4.html", image: "/SanPham/img/category/PhongTam/den-DTY.png", title: "Bóng đèn DTY", price: "80.000", amount: "189", category: "Phòng tắm", status: "Còn hàng", code: "phongtam4"},
    { id: 21,link: "/SanPham/html/category/detail_item/rem_cua/rem1.html", image: "/SanPham/img/category/RemCua/num-01.png", title: "Rèm cửa 01", price: "900.000", amount: "26", category: "Rèm cửa", status: "Còn hàng", code: "rem1"},
    { id: 22,link: "/SanPham/html/category/detail_item/rem_cua/rem2.html", image: "/SanPham/img/category/RemCua/num-02.png", title: "Rèm cửa 02", price: "890.000", amount: "38", category: "Rèm cửa", status: "Còn hàng", code: "rem2"},
    { id: 23,link: "/SanPham/html/category/detail_item/rem_cua/rem3.html", image: "/SanPham/img/category/RemCua/num-03.png", title: "Rèm cửa 03", price: "750.000", amount: "65", category: "Rèm cửa", status: "Còn hàng", code: "rem3"},
    { id: 24,link: "/SanPham/html/category/detail_item/rem_cua/rem4.html", image: "/SanPham/img/category/RemCua/num-04.png", title: "Rèm cửa 04", price: "950.000", amount: "87", category: "Rèm cửa", status: "Còn hàng", code: "rem4"},
    { id: 25,link: "/SanPham/html/category/detail_item/sofa/sofa1.html", image: "/SanPham/img/category/Sofa/kem.png", title: "Ghế sofa kem", price: "2.500.000", amount: "43", category: "Ghế sofa", status: "Còn hàng", code: "sofa1"},
    { id: 26,link: "/SanPham/html/category/detail_item/sofa/sofa2.html", image: "/SanPham/img/category/Sofa/cafe.png", title: "Sofa cafe", price: "2.300.000", amount: "12", category: "Ghế sofa", status: "Còn hàng", code: "sofa2"},
    { id: 27,link: "/SanPham/html/category/detail_item/sofa/sofa3.html", image: "/SanPham/img/category/Sofa/don-em-ai.png", title: "Ghế sofa đơn êm ái", price: "2.600.000", amount: "2", category: "Ghế sofa", status: "Còn hàng", code: "sofa3"},
    { id: 28,link: "/SanPham/html/category/detail_item/sofa/sofa4.html", image: "/SanPham/img/category/Sofa/don-SFD18.png", title: "Sofa đơn SFD18", price: "5.100.000", amount: "12", category: "Ghế sofa", status: "Còn hàng", code: "sofa4"},
    { id: 29,link: "/SanPham/html/category/detail_item/tu_quan_ao/tu1.html", image: "/SanPham/img/category/TuQuanAo/BOV-WVR-1855L.png", title: "Tủ quần áo BIG ONE VIETNAM WVR-1855L", price: "4.000.000", amount: "3", category: "Tủ quần áo", status: "Còn hàng", code: "tu1"},
    { id: 30,link: "/SanPham/html/category/detail_item/tu_quan_ao/tu2.html", image: "/SanPham/img/category/TuQuanAo/B1241K.png", title: "Tủ áo B1241K", price: "5.400.000", amount: "7", category: "Tủ quần áo", status: "Còn hàng", code: "tu2"},
    { id: 31,link: "/SanPham/html/category/detail_item/tu_quan_ao/tu3.html", image: "/SanPham/img/category/TuQuanAo/Bellasofa-B1239.png", title: "Tủ Áo Bellasofa B1239", price: "3.790.000", amount: "11", category: "Tủ quần áo", status: "Còn hàng", code: "tu3"},
    { id: 32,link: "/SanPham/html/category/detail_item/tu_quan_ao/tu4.html", image: "/SanPham/img/category/TuQuanAo/B1238.png", title: "Tủ áo B1238", price: "5.100.000", amount: "1", category: "Tủ quần áo", status: "Còn hàng", code: "tu4"},
]



let perPage = 10,
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
            html += '<tr>';
            html += '<td>' + item.code + '</td>';
            html += '<td>' + item.title + '</td>';
            html += '<td>' + '<img src=' + item.image + '>' + '</td>';
            html += '<td>' + item.amount + '</td>';
            html += '<td>' + item.status + '</td>';
            html += '<td>' + item.price + '</td>';
            html += '<td>' + item.category + '</td>';
            html += '<td>';
            html += '<button class="btn btn-primary btn-sm trash" type="button" title="Xóa" onclick="myFunction(this)">' + '<i class="fas fa-trash-alt">' + '</i>' + '</button>';
            html += '<a href="/SanPham/html/admin/form_edit_product.html">' + '<button class="btn btn-primary btn-sm edit" type="button" title="Sửa" id="show-emp" data-toggle="modal" data-target="#ModalUP">' + '<i class="fas fa-edit">' + '</i>' + '</button>' + '</a>';
            html += '</td>';
            html += '</tr>';
        }
    })
    document.getElementById('product_order').innerHTML = html;
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
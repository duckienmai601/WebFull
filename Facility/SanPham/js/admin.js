jQuery(function () {
    jQuery(".trash").click(function () {
        swal({
            title: "Cảnh báo",
            text: "Bạn có chắc chắn là muốn xóa sản phẩm này?",
            buttons: ["Hủy bỏ", "Đồng ý"],
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Đã xóa thành công!", {
                        
                    });
                }
            });
    });
});






// ------------------------------ Add image ------------------------------
$(document).ready(function(){
    $("button[type='image']").click(function() {
        $("input[id='files']").click();
    });
});
function handleFileSelect(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
            continue;
        }
        var reader = new FileReader();
        reader.onload = (function (theFile) {
            return function (e) {
                var span = document.createElement('span');
                span.innerHTML = ['<img class="thumb" src="', e.target.result,'" title="', escape(theFile.name), '"/>' ,'<i class="fa fa-times time " ></i>'].join('');
                document.getElementById('previewImg').insertBefore(span, null);
            };
        })
        (f);
        reader.readAsDataURL(f);
    }
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);
$(document).on('click',".time" ,function() {
    if(confirm("Bạn Có Muốn Xóa ?")) {
        $(this).closest("span" ).fadeOut();
        $("#files").val(null);
    }
    else return false;
});
                



// ------------------------------ change time ------------------------------

function changeTime(type, element) {
    let tab = document.getElementsByClassName('tab_item');
    for(i=0;i<tab.length;i++) {
        tab[i].style.background = '#c6edfd';
        tab[i].style.color = '#001c40';
    }
    
    element.style.background = '#001c40';
    element.style.color = '#c6edfd';
    document.getElementById(type).style.display = 'block';
    switch (type) {
        case 'past1M':
            document.getElementById('past3M').style.display = 'none';
            document.getElementById('past1Y').style.display = 'none';
            break;
        case 'past3M':
            document.getElementById('past1M').style.display = 'none';
            document.getElementById('past1Y').style.display = 'none';
            break;
        case 'past1Y':
            document.getElementById('past1M').style.display = 'none';
            document.getElementById('past3M').style.display = 'none';
            break;
    }
}

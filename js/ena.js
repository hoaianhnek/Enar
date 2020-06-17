$(document).ready(function(){
    $('.nut li').click(function(){
    	$('.nut li').removeClass('active');
        $(this).addClass('active');
        x = $(this).index();
        x = x+1;
        //cho nd tương ứng hiển thị
        $('.noidung ul li').removeClass('hienlen');
        $('.noidung ul li:nth-child('+x+')').addClass('hienlen');
    })
})
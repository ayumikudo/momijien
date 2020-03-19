//メインスライダー
$(function () {
  $('#main-gallery').flickity({
    // オプション
    cellAlign: 'left',
    autoPlay: true,
    wrapAround: true,
    prevNextButtons: false
  });
});

//客室スライダー
$(function () {
  $('#room-gallery').flickity({
    // オプション
    cellAlign: 'left',
    autoPlay: true,
    wrapAround: true,
    pageDots: false
  });
});

//スムーススクロール
$(function () {
  $("a[href*=#]:not([href=#])").click(function () {
    var target = $($(this).attr("href")).offset().top;
    target -= 50;
    $("html, body").animate({ scrollTop: target }, 500);
    return false;
  });
});


$(function () {
  //アニメーション属性を持つ要素を非表示、animated属性を追加
  $('*[animation]').addClass('invisible animated');

  $(window).scroll(function () {
    $('*[animation]').each(function () {
      //アニメーションをさせる要素の上の位置
      var imgPos = $(this).offset().top;
      //ウインドウ上部の位置
      var scroll = $(window).scrollTop();
      //アニメーションを発火させる位置
      var position = imgPos - window.innerHeight + window.innerHeight / 5;

      //animation属性に記載されたアニメーション名を取得
      if (this.hasAttribute('animation')) {
        var animation = this.getAttribute('animation');
      }
      //発火位置まで来たら要素を表示し、アニメーションをclass名に追加
      if (scroll > position) {
        $(this).removeClass('invisible').addClass(animation);
      }
    });
  });
});

//言語切り替え
$(function () {
  $(".en").hide();

  //#jaをクリックしたら日本語表示
  $("#ja").click(function () {
    $(".ja").show();
    $(".en").hide();
    $(".main-visual").removeClass("en-catch");
      $(".main-visual").addClass("ja-catch");
    return false;
  });

  //#enをクリックしたら英語表示
  $("#en").click(function () {
    $(".en").show();
    $(".ja").hide();
    $(".main-visual").removeClass("ja-catch");
    $(".main-visual").addClass("en-catch");
    return false;
  });

   //切り替えリンクのスタイル変化
  $(".language li a").click(function () {
    $(".current").removeClass("current");
    $(this).addClass("current");
    return false;
  });
});

//SPメニュー
$(function () {
  $('.hamberger-menu').click(function () {
    $(this).toggleClass("open");
		if($(this).hasClass('open')) {
			$('header nav').fadeIn();
		} else {
			$('header nav').fadeOut();
		}
  });
});


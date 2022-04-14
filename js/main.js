$("#skip").click(function () {
    $("span").addClass("brume")
    if ($("span.brume").length === $("span").length) {
        // Si tout les spans ont disparu alors:
        $("body").css('animation', 'zoom forwards 1.25s linear');
        $("body").css('overflow', 'hidden');
        $("#firstProject").css("display", "block");
        $("#firstProject").css("animation", "blurIn 2s linear");
        $("#firstProject").css("animation-fill-mode", "forwards");
        $("#firstProject").css("cursor", "text");
        $(".swapProject").css("animation", "blurIn 2s linear")
        $(".swapProject").css("display", "block");
        $(".swapProject").css("animation-fill-mode", "forwards");
        setTimeout(() => {
            $("#pictureFirstProject").css("display", "block");
            $("#pictureFirstProject").css("animation", "blurIn 1s linear");
            $("#pictureFirstProject").css("animation-fill-mode", "forwards");
            $("#linkFirstProject").css("display", "block");
            $("#linkFirstProject").css("animation", "blurIn 1s linear");
            $("#linkFirstProject").css("animation-fill-mode", "forwards");
            $("#firstLeftText").css("display", "block");
            $("#firstLeftText").css("animation", "blurIn 1s linear");
            $("#firstLeftText").css("animation-fill-mode", "forwards");
            $("#firstRightText").css("display", "block");
            $("#firstRightText").css("animation", "blurIn 1.5s linear");
            $("#firstRightText").css("animation-fill-mode", "forwards");
            $("#textFirstProject").css("display", "block");
            $("#textFirstProject").css("animation", "blurIn 1.5s linear");
            $("#textFirstProject").css("animation-fill-mode", "forwards");
        }, 2000)
    }
})

$("span").mouseenter(function () {
    $(this).addClass("brume");
    if ($("span.brume").length === $("span").length) {
        // Si tout les spans ont disparu alors:
        $("body").css('animation', 'zoom forwards 1s linear');
        $("body").css('overflow', 'hidden');
        $("#firstProject").css("display", "block");
        $("#firstProject").css("animation", "blurIn 2s linear");
        $("#firstProject").css("animation-fill-mode", "forwards");
        $("#firstProject").css("cursor", "text");
        $(".swapProject").css("animation", "blurIn 2s linear")
        $(".swapProject").css("display", "block");
        $(".swapProject").css("animation-fill-mode", "forwards");
        setTimeout(() => {
            $("#pictureFirstProject").css("display", "block");
            $("#pictureFirstProject").css("animation", "blurIn 1s linear");
            $("#pictureFirstProject").css("animation-fill-mode", "forwards");
            $("#linkFirstProject").css("display", "block");
            $("#linkFirstProject").css("animation", "blurIn 1s linear");
            $("#linkFirstProject").css("animation-fill-mode", "forwards");
            $("#firstLeftText").css("display", "block");
            $("#firstLeftText").css("animation", "blurIn 1s linear");
            $("#firstLeftText").css("animation-fill-mode", "forwards");
            $("#firstRightText").css("display", "block");
            $("#firstRightText").css("animation", "blurIn 1.5s linear");
            $("#firstRightText").css("animation-fill-mode", "forwards");
            $("#textFirstProject").css("display", "block");
            $("#textFirstProject").css("animation", "blurIn 1.5s linear");
            $("#textFirstProject").css("animation-fill-mode", "forwards");
        }, 2000)
    }
})




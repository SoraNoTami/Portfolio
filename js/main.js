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
        $("#pictureFirstProject").css("display", "block");
        $("#pictureFirstProject").css("animation", "blurIn 2s linear");
        $("#pictureFirstProject").css("animation-fill-mode");
    }
})

$("span").mouseenter(function () {
    $(this).addClass("brume");
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
    }
})


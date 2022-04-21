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
        $("#firstLeftButton").css("animation", "blurIn 2s linear")
        $("#firstLeftButton").css("display", "block");
        $("#firstLeftButton").css("animation-fill-mode", "forwards");
        $("#firstRightButton").css("animation", "blurIn 2s linear")
        $("#firstRightButton").css("display", "block");
        $("#firstRightButton").css("animation-fill-mode", "forwards");
        setTimeout(() => {
            $("#pictureFirstProject").css("display", "block");
            $("#pictureFirstProject").css("animation", "blurIn 1s linear");
            $("#pictureFirstProject").css("animation-fill-mode", "forwards");
            $("#linkFirstProject").css("display", "block");
            $("#linkFirstProject").css("animation", "blurIn 1s linear");
            $("#linkFirstProject").css("animation-fill-mode", "forwards");
            $("#firstLeftText").css("display", "block");
            $("#firstLeftText").css("animation", "blurIn 1.5s linear");
            $("#firstLeftText").css("animation-fill-mode", "forwards");
            $("#firstRightText").css("display", "block");
            $("#firstRightText").css("animation", "blurIn 1.5s linear");
            $("#firstRightText").css("animation-fill-mode", "forwards");
            $("#textFirstProject").css("display", "block");
            $("#textFirstProject").css("animation", "blurIn 1s linear");
            $("#textFirstProject").css("animation-fill-mode", "forwards");
        }, 2000)
    }
})


$("span").mouseenter(function () {
    if ($("span.brume").length !== $("span").length) {
        $(this).addClass("brume");
        if ($("span.brume").length === $("span").length) {
            // Si tout les spans ont disparu alors:
            $("body").css('animation', 'zoom forwards 1s linear');
            $("body").css('overflow', 'hidden');
            $("#firstProject").css("display", "block");
            $("#firstProject").css("animation", "blurIn 2s linear");
            $("#firstProject").css("animation-fill-mode", "forwards");
            $("#firstProject").css("cursor", "text");
            $("#firstLeftButton").css("animation", "blurIn 2s linear")
            $("#firstLeftButton").css("display", "block");
            $("#firstLeftButton").css("animation-fill-mode", "forwards");
            $("#firstRightButton").css("animation", "blurIn 2s linear")
            $("#firstRightButton").css("display", "block");
            $("#firstRightButton").css("animation-fill-mode", "forwards");
            setTimeout(() => {
                $("#pictureFirstProject").css("display", "block");
                $("#pictureFirstProject").css("animation", "blurIn 1s linear");
                $("#pictureFirstProject").css("animation-fill-mode", "forwards");
                $("#linkFirstProject").css("display", "block");
                $("#linkFirstProject").css("animation", "blurIn 1s linear");
                $("#linkFirstProject").css("animation-fill-mode", "forwards");
                $("#firstLeftText").css("display", "block");
                $("#firstLeftText").css("animation", "blurIn 1.5s linear");
                $("#firstLeftText").css("animation-fill-mode", "forwards");
                $("#firstRightText").css("display", "block");
                $("#firstRightText").css("animation", "blurIn 1.5s linear");
                $("#firstRightText").css("animation-fill-mode", "forwards");
                $("#textFirstProject").css("display", "block");
                $("#textFirstProject").css("animation", "blurIn 1s linear");
                $("#textFirstProject").css("animation-fill-mode", "forwards");
            }, 2000)
        }
    }
})

$("#firstLeftButton").click(function () {
    $("#firstProject").css("animation", "blurOut 2s linear");
    $("#firstProject").css("cursor", "default");
    $("#pictureFirstProject").css("display", "block");
    $("#pictureFirstProject").css("animation", "blurOut 1s linear");
    $("#pictureFirstProject").css("animation-fill-mode", "forwards");
    $("#linkFirstProject").css("display", "block");
    $("#linkFirstProject").css("animation", "blurOut 1s linear");
    $("#linkFirstProject").css("animation-fill-mode", "forwards");
    $("#firstLeftText").css("display", "block");
    $("#firstLeftText").css("animation", "blurOut 1.5s linear");
    $("#firstLeftText").css("animation-fill-mode", "forwards");
    $("#firstRightText").css("display", "block");
    $("#firstRightText").css("animation", "blurOut 1.5s linear");
    $("#firstRightText").css("animation-fill-mode", "forwards");
    $("#textFirstProject").css("display", "block");
    $("#textFirstProject").css("animation", "blurOut 1s linear");
    $("#textFirstProject").css("animation-fill-mode", "forwards");
    $("header").css("background-image", "url('/img/profile.png')")
    $("header").css("animation-fill-mode", "forwards")
})

$("#firstRightButton").click(function () {
    $("#firstProject").css("animation", "blurOut 2s linear");
    $("#firstProject").css("cursor", "default");
    $("#pictureFirstProject").css("display", "block");
    $("#pictureFirstProject").css("animation", "blurOut 1s linear");
    $("#pictureFirstProject").css("animation-fill-mode", "forwards");
    $("#linkFirstProject").css("display", "block");
    $("#linkFirstProject").css("animation", "blurOut 1s linear");
    $("#linkFirstProject").css("animation-fill-mode", "forwards");
    $("#firstLeftText").css("display", "block");
    $("#firstLeftText").css("animation", "blurOut 1.5s linear");
    $("#firstLeftText").css("animation-fill-mode", "forwards");
    $("#firstRightText").css("display", "block");
    $("#firstRightText").css("animation", "blurOut 1.5s linear");
    $("#firstRightText").css("animation-fill-mode", "forwards");
    $("#textFirstProject").css("display", "block");
    $("#textFirstProject").css("animation", "blurOut 1s linear");
    $("#textFirstProject").css("animation-fill-mode", "forwards");
})




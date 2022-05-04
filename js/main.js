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
    $("#firstLeftButton").css("animation", "blurOut 2s linear")
    $("#firstLeftButton").css("display", "none");
    $("#firstLeftButton").css("animation-fill-mode", "forwards");
    $("#firstRightButton").css("animation", "blurOut 2s linear")
    $("#firstRightButton").css("display", "none");
    $("#firstRightButton").css("animation-fill-mode", "forwards");
    $("header").css("background-image", "url('/Portfolio/img/profile.png')")
    $("header").css("animation-fill-mode", "forwards")
    setTimeout(() => {
        $("#monProfil").css("display", "block");
        $("#monProfil").css("animation", "blurIn 2s linear");
        $("#monProfil").css("animation-fill-mode", "forwards");
        $("#monProfil").css("cursor", "text");
        $("#profilLeftButton").css("animation", "blurIn 2s linear")
        $("#profilLeftButton").css("display", "block");
        $("#profilLeftButton").css("animation-fill-mode", "forwards");
        $("#profilRightButton").css("animation", "blurIn 1.5s linear")
        $("#profilRightButton").css("display", "block");
        $("#profilRightButton").css("animation-fill-mode", "forwards");
        $("#profilRightText").css("display", "block");
        $("#profilRightText").css("animation", "blurIn 2s linear");
        $("#profilRightText").css("animation-fill-mode", "forwards");
    }, 500)
})

$("#profilRightButton").click(function () {
    $("#monProfil").css("display", "block");
    $("#monProfil").css("animation", "blurOut 2s linear");
    $("#monProfil").css("animation-fill-mode", "forwards");
    $("#monProfil").css("cursor", "text");
    $("#profilLeftButton").css("animation", "blurOut 2s linear")
    $("#profilLeftButton").css("display", "none");
    $("#profilLeftButton").css("animation-fill-mode", "forwards");
    $("#profilRightButton").css("animation", "blurOut 1.5s linear")
    $("#profilRightButton").css("display", "none");
    $("#profilRightButton").css("animation-fill-mode", "forwards");
    $("#profilRightText").css("animation", "blurOut 1.5s linear");
    $("#profilRightText").css("display", "none");
    $("#profilRightText").css("animation-fill-mode", "forwards");
    $("header").css("background-image", "url('/Portfolio/img/header.jpg')")
    $("header").css("animation-fill-mode", "forwards")
    setTimeout(() => {
        $("#firstProject").css("display", "block");
        $("#firstProject").css("animation", "blurIn 1s linear");
        $("#firstProject").css("animation-fill-mode", "forwards");
        $("#firstProject").css("cursor", "text");
        $("#firstLeftButton").css("animation", "blurIn 1s linear")
        $("#firstLeftButton").css("display", "block");
        $("#firstLeftButton").css("animation-fill-mode", "forwards");
        $("#firstRightButton").css("animation", "blurIn 1s linear")
        $("#firstRightButton").css("display", "block");
        $("#firstRightButton").css("animation-fill-mode", "forwards");
        $("#pictureFirstProject").css("display", "block");
        $("#pictureFirstProject").css("animation", "blurIn 1.5s linear");
        $("#pictureFirstProject").css("animation-fill-mode", "forwards");
        $("#linkFirstProject").css("display", "block");
        $("#linkFirstProject").css("animation", "blurIn 1.5s linear");
        $("#linkFirstProject").css("animation-fill-mode", "forwards");
        $("#firstLeftText").css("display", "block");
        $("#firstLeftText").css("animation", "blurIn 2s linear");
        $("#firstLeftText").css("animation-fill-mode", "forwards");
        $("#firstRightText").css("display", "block");
        $("#firstRightText").css("animation", "blurIn 2s linear");
        $("#firstRightText").css("animation-fill-mode", "forwards");
        $("#textFirstProject").css("display", "block");
        $("#textFirstProject").css("animation", "blurIn 1.5s linear");
        $("#textFirstProject").css("animation-fill-mode", "forwards");
    }, 1250)
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
    $("#firstLeftButton").css("animation", "blurOut 2s linear")
    $("#firstLeftButton").css("display", "block");
    $("#firstLeftButton").css("animation-fill-mode", "forwards");
    $("#firstRightButton").css("animation", "blurOut 2s linear")
    $("#firstRightButton").css("display", "block");
    $("#firstRightButton").css("animation-fill-mode", "forwards");
    $("header").css("background-image", "url('/Portfolio/img/2ndProject.jpg')")
    $("header").css("animation-fill-mode", "forwards")
    setTimeout(() => {
        $("#secondProject").css("display", "block");
        $("#secondProject").css("animation", "blurIn 1s linear");
        $("#secondProject").css("animation-fill-mode", "forwards");
        $("#secondProject").css("cursor", "text");
        $("#secondLeftButton").css("animation", "blurIn 1s linear")
        $("#secondLeftButton").css("display", "block");
        $("#secondLeftButton").css("animation-fill-mode", "forwards");
        $("#secondRightButton").css("animation", "blurIn 1s linear")
        $("#secondRightButton").css("display", "block");
        $("#secondRightButton").css("animation-fill-mode", "forwards");
        $("#pictureSecondProject").css("display", "block");
        $("#pictureSecondProject").css("animation", "blurIn 1.5s linear");
        $("#pictureSecondProject").css("animation-fill-mode", "forwards");
        $("#linkSecondProject").css("display", "block");
        $("#linkSecondProject").css("animation", "blurIn 1.5s linear");
        $("#linkSecondProject").css("animation-fill-mode", "forwards");
        $("#secondLeftText").css("display", "block");
        $("#secondLeftText").css("animation", "blurIn 2s linear");
        $("#secondLeftText").css("animation-fill-mode", "forwards");
        $("#secondRightText").css("display", "block");
        $("#secondRightText").css("animation", "blurIn 2s linear");
        $("#secondRightText").css("animation-fill-mode", "forwards");
        $("#textSecondProject").css("display", "block");
        $("#textSecondProject").css("animation", "blurIn 1.5s linear");
        $("#textSecondProject").css("animation-fill-mode", "forwards");
    }, 1250)
})

$("#secondLeftButton").click(function () {
    $("#secondProject").css("animation", "blurOut 2s linear");
    $("#secondProject").css("cursor", "default");
    $("#pictureSecondProject").css("display", "none");
    $("#pictureSecondProject").css("animation", "blurOut 1s linear");
    $("#pictureSecondProject").css("animation-fill-mode", "forwards");
    $("#linkSecondProject").css("display", "none");
    $("#linkSecondProject").css("animation", "blurOut 1s linear");
    $("#linkSecondProject").css("animation-fill-mode", "forwards");
    $("#secondLeftText").css("display", "none");
    $("#secondLeftText").css("animation", "blurOut 1.5s linear");
    $("#secondLeftText").css("animation-fill-mode", "forwards");
    $("#secondRightText").css("display", "none");
    $("#secondRightText").css("animation", "blurOut 1.5s linear");
    $("#secondRightText").css("animation-fill-mode", "forwards");
    $("#textSecondProject").css("display", "none");
    $("#textSecondProject").css("animation", "blurOut 1s linear");
    $("#textSecondProject").css("animation-fill-mode", "forwards");
    $("#secondLeftButton").css("animation", "blurOut 2s linear")
    $("#secondLeftButton").css("display", "none");
    $("#secondLeftButton").css("animation-fill-mode", "forwards");
    $("#secondRightButton").css("animation", "blurOut 2s linear")
    $("#secondRightButton").css("display", "none");
    $("#secondRightButton").css("animation-fill-mode", "forwards");
    $("header").css("background-image", "url('/Portfolio/img/header.jpg')")
    $("header").css("animation-fill-mode", "forwards")
    setTimeout(() => {
        $("#firstProject").css("display", "block");
        $("#firstProject").css("animation", "blurIn 1s linear");
        $("#firstProject").css("animation-fill-mode", "forwards");
        $("#firstProject").css("cursor", "text");
        $("#firstLeftButton").css("animation", "blurIn 1s linear")
        $("#firstLeftButton").css("display", "block");
        $("#firstLeftButton").css("animation-fill-mode", "forwards");
        $("#firstRightButton").css("animation", "blurIn 1s linear")
        $("#firstRightButton").css("display", "block");
        $("#firstRightButton").css("animation-fill-mode", "forwards");
        $("#pictureFirstProject").css("display", "block");
        $("#pictureFirstProject").css("animation", "blurIn 1.5s linear");
        $("#pictureFirstProject").css("animation-fill-mode", "forwards");
        $("#linkFirstProject").css("display", "block");
        $("#linkFirstProject").css("animation", "blurIn 1.5s linear");
        $("#linkFirstProject").css("animation-fill-mode", "forwards");
        $("#firstLeftText").css("display", "block");
        $("#firstLeftText").css("animation", "blurIn 2s linear");
        $("#firstLeftText").css("animation-fill-mode", "forwards");
        $("#firstRightText").css("display", "block");
        $("#firstRightText").css("animation", "blurIn 2s linear");
        $("#firstRightText").css("animation-fill-mode", "forwards");
        $("#textFirstProject").css("display", "block");
        $("#textFirstProject").css("animation", "blurIn 1.5s linear");
        $("#textFirstProject").css("animation-fill-mode", "forwards");
    }, 1250)
})
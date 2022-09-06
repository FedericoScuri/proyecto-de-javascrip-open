
// $("li").hide()

// $("#l1").hide()


$(()=>{


    $(".boton1").click(()=>{
        // $("h1").hide()
        $("h1").fadeOut()
    })

    // $(".boton2").click(()=>{
    //     // $("h1").show()
    //     $("h1").fadeIn()
    // })

    $(".boton2").click(()=>{
        $("h1").css({color:"red"})
    })

    
    $("#add").click(()=>{
        $("ul").append("<li>Nuevo elemento</li>")
    })


})
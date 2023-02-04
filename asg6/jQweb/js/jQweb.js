$(function(){
    $(".navbar").hide().delay(500).fadeIn(1000);

    $(".links").eq(0).click(function(){
        $(".links").removeClass("selected");
		$(this).addClass("selected");
        $(".main").empty();
        let $about = "<img id='headshot' src='images/headshot.jpg' />"
        $about += "<p>Hi! I'm a second-year Computer Science major at New York University Shanghai, studying at NYU New York until \
        international travel reopens. I enjoy web development and learning new tools and packages for it. I also enjoy photography and \
        I contribute photos for NYU's student newspaper, <a href='https://nyunews.com/staff_name/amory-gao/' target='_blank'>Washington Square News</a>. Enjoy your stay!</p>";
        $(".main").html($about);
    })

    $(".links").eq(1).click(function(){
        $(".links").removeClass("selected");
		$(this).addClass("selected");
        $(".main").empty();
        let $photos = "<h2>Portrait</h2> <img src='images/grad-3.jpg' /> <img src='images/grad-1.jpg' /> <img src='images/grad-4.jpg' />"
        $photos += "<h2>Performance</h2> <img src='images/performance-1.jpg' /> <img src='images/performance-2.jpg' /> <img src='images/performance-3.jpg' />";
        $photos += "<h2>Landscape</h2> <img src='images/landscape-1.jpg' /> <img src='images/landscape-2.jpg' /> <img src='images/landscape-4.jpg' />"
        $(".main").html($photos);
    })

    $(".links").eq(2).click(function(){
        $(".links").removeClass("selected");
		$(this).addClass("selected");
        $(".main").empty();
        let $videos = '<iframe width="560" height="315" src="https://www.youtube.com/embed/9p077LuLcDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $videos += '<iframe width="560" height="315" src="https://www.youtube.com/embed/ieqxUR8ylE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $videos += '<iframe width="560" height="315" src="https://www.youtube.com/embed/kA4By47jkSQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        $(".main").html($videos);
    })
});
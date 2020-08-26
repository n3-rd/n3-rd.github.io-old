$(document).ready(function(){

    var options = {
        backgroundColor: '#121212',
        label: '🌗',
        mixColor: '#908FB2' ,
        buttonColorDark: '#000'
    }
    const darkMode = new Darkmode(options);
    darkMode.showWidget();
    $('#shortenedMenu > header > i').addClass('bluee-color')

    if (darkMode.isActivated()){
        $('#form-button-icon').attr('src', 'assets/img/rawAsset-2-dark.svg');
        $('.content, #shortenedMenu > header').addClass('darkk')
        $('#shortenedMenu > header > h1').addClass('white')
        $('.copy-result-link, #shortenedMenu > header > i, #main-section > a > i').addClass('bluee-color')
        $('body > div.prompt-background > div').addClass('darkk')
        $('body > div.prompt-background > div p').addClass('white')
    }

else{
    $('.copy-result-link').css('color', '#fff')
}

    $('.darkmode-toggle').click(function(){
        window.location = 'index.html'
    })


    

})

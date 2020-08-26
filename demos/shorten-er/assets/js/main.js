$('document').ready(function () {

    // append history section with existing history in local storage
    $('#history').html(localStorage.getItem('history'))

    if(localStorage.getItem('lastLink')){
        $('#main-text').text('Last link')
    }

    // initialize clipboard.js
    new ClipboardJS('.copy-result-link')
    new ClipboardJS('.copy')
if($('.result-link').html() == null){
    $('.result-link').html('<b>.hfjfdkjd</b>')
}
    // append the last link to the result link section
    $('.result-link').html(localStorage.getItem('lastLink'))

    //  perform actions when the copy icon is pressed
    $('#main-section > div.view-content > i').click(function () {
        //  show toast
        nativeToast({
            message: 'Link Copied',
            position: 'south',
            timeout: '5000'
        })
    })

    // implement the history item delete button
    $('.del').click(function () {
        $(this).parent().remove()
        localStorage.setItem('history', $('#history').html())
    })

    $('.copy').click(function(){
        nativeToast({
            message: 'Link Copied',
            position: 'south',
            timeout: '5000'
        })
    })

    $('#shortenedMenu > header > i').click(function(){
        $('.prompt-background').css('display', 'block')
    })

    $('.prompt-delete').click(function(){
        localStorage.removeItem('history')

        $('.prompt-background').css('display', 'none')

        nativeToast({
            message: 'History Cleared',
            position: 'south',
            timeout: '5000'
        })
    })

    $('.prompt-cancel, .prompt-background').click(function(){
        $('.prompt-background').css('display', 'none')
    })



    //  perform actions when the main button (shortener) is pressed
    $('#main-button').click(function () {
        // connect to the shortco.de API by fusing the main input value with the api URL
        $.getJSON('https://api.shrtco.de/v2/shorten?url= + $('#main-input').val()', function (jd) {

    })
    // loading handling here


.done(function(jd){

            var clipboardTargeter = jd.result.short_link

            // Show the resulted link
            $('.result-link').html(jd.result.short_link)

            // Store the resulted link in local storage for saving last link
            localStorage.setItem('lastLink', $('.result-link').html())

            // add current url original link to history
            $('#history').prepend("<li>" 
            + jd.result.original_link +
            "<span class='del pull-right icon icon-close'></span><span class='copy pull-right icon icon-clipboard2' data-clipboard-text=" 
            + clipboardTargeter +
             "></span></li>")

            // store entire history html in local storage for persistent storage
            localStorage.setItem('history', $('#history').html())
       
        })

        .fail(function(jd){

// put failed function here
nativeToast({
            message: 'An error occoured',
            position: 'south',
            timeout: '5000'
        })

        })
        

    })


})

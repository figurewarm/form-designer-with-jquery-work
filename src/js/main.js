$(function() {
    var count = 0;
    $("#im").dialog({
        autoOpen: false,
        // show: {
        //     effect: "blind",
        //     duration: 1000
        // },
        // hide: {
        //     effect: "explode",
        //     duration: 1000
        // },
        height: 200,
        width: 300,
        modal: true,
        buttons: {
            "提交": function() {
                var seclected = $('.option').val();
                var text = '';
                if (seclected == "text") {
                    text += '<div class="the' + count + '"><input type="text" class="in">' + '<button class="btn' + count + '" onclick = "clicked(' + count + ')"style="margin-left:10px;">删除</button></div>'
                    count++
                } else {
                    text += '<div class="the' + count + '"><input type="date" class="in">' + '<button class="btn' + count + '" onclick = "clicked(' + count + ')"style="margin-left:10px;">删除</button></div>'
                    count++
                }
                $('.addition').append(text)
            },
            关闭: function() {
                $(this).dialog("close");
            }
        }
    })
    $('.addNew').click(function() {
        $("#im").dialog("open")
    })

})


function clicked(count) {
    console.log('555')
    var klass = '.the' + count;
    $(klass).remove();
}
$(() => {
    var valu = true
    $('#preview').click(() => {
        if (valu) {
            $('div').find('button').hide();
            $('#preview').text('编辑')
            valu = false;
        } else {
            $('div').find('button').show();
            $('#preview').text('预览')
            valu = true;
        }
    })
})
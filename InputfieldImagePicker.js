$(document).ready(function () {

    $(".InputfieldImagePickerInput").on('change textInput input', function () {
        var sid = $(this).data('sid');
        var img = $("#pv_" + sid);
        img.css('display', 'inline-block');
        img.attr("src", $(this).val());
    });


    $(document).on("click", ".InputfieldImagePickerOpen", function (e) {
        loadIframeLinkPicker(e.currentTarget);
        $(this).removeClass('ui-state-active');
        return false;
    });

    function loadIframeLinkPicker(opener) {

        var sid = $(opener).attr('data-sid');
        var insertLinkLabel = ' &nbsp;' + document.pp_translations_title;
        var cancelLabel = document.pp_translations_cancel;
        var $iframe; // set after modalSettings down

        // settings for modal window
        var modalSettings = {
            title: "<i class='fa fa-image'></i> " + insertLinkLabel,
            buttons: [{
                    html: "<i class='fa fa-times-circle'></i> " + cancelLabel,
                    click: function () {
                        $iframe.dialog("close");
                    },
                    class: 'ui-priority-secondary'
                }
            ]
        };

        // create modal window

        var $iframe = pwModalWindow(document.pp_pickerpage + '?sid=' + encodeURIComponent(sid), modalSettings, 'medium');

        // modal window load event
        $iframe.load(function () {
            var $i = $iframe.contents();
            $(".selectableimg", $i).click(function () {
                var newUrl = $(this).data("origurl").replace(/^.*\/\/[^\/]+/, '')

                $("#isi_" + sid).val(newUrl);
                var img = $("#pv_" + sid);
                img.css('display', 'inline-block');
                img.attr("src", this.src);
                $iframe.dialog("close");
            });
        }); // load 
    }
});

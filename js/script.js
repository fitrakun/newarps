$(document).ready(function() {

    var today = new Date();
    $("#title-date-week").text(moment(today, "YYYY.MM.DD").day(1).format("MMMM DD") + " - " + moment(today, "YYYY.MM.DD").day(7).format("MMMM DD"));
    $('.like-count').each(function() {
        if (parseInt($(this).find('.number').attr('data-like-number')) > 0) {
            $(this).show();
        } else {
            $(this).hide();
        }
    })

    //Choose project select2 function
    $(".select2-project-name").select2({
        placeholder: "Choose Project",
        tags: true,
        width: '100%'
    });

    //Choose date range in admin function
    $("#admin-month-picker").datetimepicker({
        viewMode: 'months',
        format: 'MMMM YYYY',
        locale: 'en',
        date: moment()
    })

    //Choose date range datepicker function
    $("#date-range-datepicker").datetimepicker({
        format: 'YYYY.MM.DD',
        locale: moment.locale('en', {
            week: { dow: 1 }
        })
    })

    //Get the value of Start and End of Week
    $('#date-range-datepicker').on('dp.change', function(e) {
        var value = $("#date-range-datepicker").val();
        var firstDate = moment(value, "YYYY.MM.DD").day(1).format("YYYY.MM.DD");
        var lastDate = moment(value, "YYYY.MM.DD").day(7).format("YYYY.MM.DD");
        $("#date-range-datepicker").val(firstDate + " - " + lastDate);
    });

    //turn on the tooltip from bootstrap
    $('[data-toggle="tooltip"]').tooltip();

    //like icon and number
    $(document).on("click tap", ".like-count", function(e) {
        var id = $(this).parent().find('.number').attr('data-id');
        var currentCount = parseInt($(this).parent().find('.number').attr('data-like-number'));
        var hasLike = $(this).parent().find('.number').attr('data-has-like');
        var newCount, newHasLike;
        if (hasLike == 0) {
            newCount = currentCount + 1;
            newHasLike = 1;
        } else {
            newCount = currentCount - 1;
            newHasLike = 0;
        }
        $(this).parent().find('.number').attr('data-has-like', newHasLike);
        $(this).parent().find('.number').attr('data-like-number', newCount);
        $(this).parent().find('.number').html(newCount);
        $(this).parent().find('.like-comment[data-id="' + id + '"').attr('data-has-like', newHasLike);
        if (newCount > 0) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });

    //like button under the comment
    $(document).on("click tap", ".like-comment", function(e) {
        var id = $(this).attr('data-id');
        var hasLike = $(this).attr('data-has-like'); //0: false, 1: true
        var currentCount = parseInt($(this).closest('.media-body').find('.number[data-id="' + id + '"').attr('data-like-number'));
        var newCount, newHasLike;
        if (hasLike == 0) {
            newCount = currentCount + 1;
            newHasLike = 1;
        } else {
            newCount = currentCount - 1;
            newHasLike = 0;
        }
        $(this).attr('data-has-like', newHasLike);
        $(this).closest('.media-body').find('.number[data-id="' + id + '"').attr('data-has-like', newHasLike);
        $(this).closest('.media-body').find('.number[data-id="' + id + '"').attr('data-like-number', newCount);
        $(this).closest('.media-body').find('.number[data-id="' + id + '"').html(newCount);
        if (newCount > 0) {
            $(this).closest('.media-body').find('.number[data-id="' + id + '"').parent('.like-count').show();
        } else {
            $(this).closest('.media-body').find('.number[data-id="' + id + '"').parent('.like-count').hide();
        }
    });

    //reply form showing up when press reply button
    $('.reply-comment').one('click tap', function() {
        $(this).closest('.media-body').append('<div class = "mt-3 media position-relative"><img src = "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt = "Fitra Rahmamuliani Avatar" class = "mr-3 rounded-circle comment-photo" /> <div class = "media-body align-self-center"> <form class = "d-flex flex-row mb-0 reply-comment-form" id="reply-form"><input type = "text" class = "form-control flex-grow-1 reply-comment-input" placeholder = "Write a reply..." /> <button type = "button" class = "btn btn-primary ml-2 reply-comment-submit" > COMMENT </button> </form> </div> </div>');
        $('.reply-comment-input').focus();
        $('.reply-comment-input').suggest('@', {
            data: memberList,
            map: function(user) {
                return {
                    value: user.name,
                    text: '<strong>' + user.name + '</strong>'
                }
            }
        });
    });

    var memberList = [
        { name: "Xiangshi Ren" },
        { name: "Kiyoshi Nakahara" },
        { name: "Kaechang Park" },
        { name: "Yukinobu Hoshino" },
        { name: "Kazunori Ueda" },
        { name: "Toru Kurihara" },
        { name: "Kavous Salehzadeh Niksirat" },
        { name: "Silpasuwanchai Chaklam" },
        { name: "Kibum Kim" },
        { name: "Zhenxin Wang" },
        { name: "Sayan Sarcar" },
        { name: "William Delamare" },
        { name: "Hamed Aliyari" },
        { name: "Kyoko Hatakenaka" },
        { name: "Xinhui Jiang" },
        { name: "Yang Li" },
        { name: "Chen Wang" },
        { name: "Fitra Rahmamuliani" },
        { name: "Xiaoxuan Li" },
        { name: "Yilin Zheng" },
        { name: "Chunyuan Lan" },
        { name: "Xinpeng Li" },
        { name: "Xi Chen" },
        { name: "Sai Jiang" },
        { name: "Hongyun Lyu" },
        { name: "Jian Zhang" },
        { name: "Zhihang Guo" },
        { name: "Yanyin Zhou" },
        { name: "Xiaofei Zhu" },
        { name: "Junlin Sun" },
        { name: "Akinori Kondo" },
        { name: "Hijiri Kaneko" },
        { name: "Ryota Torii" },
        { name: "Takaaki Kubo" },
        { name: "Yusuke Tokito" },
        { name: "Saki Hiramatsu" },
        { name: "Jiayuan Geng" },
        { name: "Adachi Kenshi" },
        { name: "Miyamoto Daisuke" }
    ];

    $('.input-comment').suggest('@', {
        data: memberList,
        map: function(user) {
            return {
                value: user.name,
                text: '<strong>' + user.name + '</strong>'
            }
        }
    });

    $(document).on("keypress", ".reply-comment-input", function(e) {
        if (e.which == 13) {
            e.preventDefault();
            var inputVal = $(this).val();
            $(".reply-comment-submit").click();
        }
    });

    $(document).on("submit", "#reply-form", function(e) {
        e.preventDefault();
    })

    $(document).on("click", ".reply-comment-submit", function(e) {
        var newId = parseInt($(this).parents().siblings('.comment-section').find('.like-comment').attr('data-id')) + 1;

        $(this).parents().siblings('.comment-section').append('<div class="media position-relative reply-comment-section"> <img src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Zhihang Guo Avatar" class="mr-3 rounded-circle comment-photo" /> <div class="media-body"> <div class="comment-section"> <div class="rounded shadow p-3"> <b class="commentator">Fitra Rahmamuliani</b><p class="comment-content mb-0 mt-1">' + $(".reply-comment-input").val() + '</p> </div> <div class="like-count rounded float-right bg-darkgray text-white py-1 px-2"> <i class="fa fa-thumbs-up mr-2"></i><span class="number" data-id="' + newId + '" data-like-number="0" data-has-like="0">0</span> </div> <div class="d-flex flex-row mx-2"> <button class="btn btn-link text-body like-comment" data-id="' + newId + '" data-has-like="0"><small><b>Like</b></small></button> <button class="btn btn-link text-body ml-4 reply-comment"><small><b>Reply</b></small></button> <span class="text-black-50 align-self-center ml-5"><small>15 seconds ago</small></span> </div> </div> </div> </div>');

        $('.like-count').each(function() {
            if (parseInt($(this).find('.number').attr('data-like-number')) > 0) {
                $(this).show();
            } else {
                $(this).hide();
            }
        })
        $(".reply-comment-input").val('');
        $(".reply-comment-input").focus();
    });
});
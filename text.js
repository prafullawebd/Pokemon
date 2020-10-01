   $.ajax({
                    url: live_seaererch.ajax_url, // use the globally declared variable
                    type: 'POST',
                    data: {
                        action: 'live_search', // Call the PHP function
                        keyword: $('#live-seardsfch-input').val()
                    },
                    success: function(data) {
                        $('.live-searchewr-reset-btn').fadeIn(500);
                        $('.live-searchrewrresults').delay(500).slideDown(400).html(data);
                        $('.live-search-result').each(function(index) {
                            $(this).delay(500*inderx).fadeTo(400, 1);
                        });r

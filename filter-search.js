/**
*   @author Victor Chimenti, MSCS 2020
*   @file filter-search.js
*   @see UCOR, UNIVERSITY CORE CURRICULUM, https://www.seattleu.edu/core/for-students/course-descriptions-20sq/
*   This URI will change after launch to: https://www.seattleu.edu/core/for-students/core-courses/
*
*   jQuery
*   This script searches the categorized courses content items for matches to the
*   user selected search parameters in the filter field dropdown menus
*
*   @version 1.0
*/

<script>


//   ***   Keyword Search   ***   //
$(function () {
    // After the DOM is ready, Wait until the window loads
    $(window).load(function () {
        // Once window loads set a timeout delay
        setTimeout(function () {
            $(function () {
                // scan the keyword each character the user inputs
                $('#id_search').on('keyup', function () {
                    // Assign Search Key
                    let key = $(this).val().toLowerCase();
                    // filter the education abroad items for the input key
                    $(function () {
                        $('.courseItemWrapper').filter(function () {
                            // when the search key is not present in the item then hide the item
                            $(this).toggleClass('hideByText', !($(this).text().toLowerCase().indexOf(key) > -1));
                        });
                    });
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        let visibleItems = $('.courseItemWrapper').not('.hideByText, .hidByTerm, .hideByModule, .hideByCommon, .hideByFaculty');
                        // check to see if array is empty
                        if (visibleItems.length == 0) {
                            // when array is empty show the results message
                            $('.noResultsToShow').removeClass('hideResultsMessage');
                        } else {
                            // when array has content items suppress the results message
                            $('.noResultsToShow').addClass('hideResultsMessage');
                        }
                    });
                });
            });
        // Delay the .on keyup function
        }, 10);
    });
});


//   ***   Term Filter   ***   //
$(function () {
    // After the DOM is ready, Wait until the window loads
    $(window).load(function () {
        // Once window loads set a timeout delay
        setTimeout(function () {
            $(function() {
                // When the Dropdown Menu Selector Academic Terms Change - Execute change function
                $('#SelectBox-ByTerm').change(function () {
                    // Assign Search Key
                    let key = $(this).val();
                    // If Search Key is Not Null then Compare to the Term List Items in Each Content Item
                    if (key) {
                        $('.term').filter(function(i,e) {
                            var value = $(this).text();
                            // Check to see if the Key and Value are a Match
                            if (value.match(key)) {
                                $(this).parents('.courseItemWrapper').removeClass('hideByTerm');
                            } else {
                                $(this).parents('.courseItemWrapper').addClass('hideByTerm');
                            }
                        });
                    // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.courseItemWrapper').removeClass('hideByTerm');
                    }
                    // check results for null
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        let visibleItems = $('.courseItemWrapper').not('.hideByText, .hidByTerm, .hideByModule, .hideByCommon, .hideByFaculty');
                        console.log("visibleItems length: " + visibleItems.length);
                        // check to see if array is empty
                        if (visibleItems.length == 0) {
                            // when array is empty show the results message
                            $('.noResultsToShow').removeClass('hideResultsMessage');
                        } else {
                            // when array has content items suppress the results message
                            $('.noResultsToShow').addClass('hideResultsMessage');
                        }
                    });
                });
            });
        // Delay the change function
        }, 10);
    });
});


</script>

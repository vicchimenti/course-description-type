<script>
/***
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




$(function () {
    // After the DOM is ready, Wait until the window loads
    $(window).load(function () {
        // Once window loads set a timeout delay
        setTimeout(function () {




            //** global array holds list of content items that will render after filter selction **//
            var visibleItems = [];
            var parseItems = {};



            
            //   ***   Process and Parse Visible Items   ***   //
            $(function () {
                let parseItemsToDisplay = function() {
                    // assign array of currently visible content items
                    visibleItems = $('.courseItemWrapper').not('.hideByText, .hideByType, .hideByTerm, .hideByModule, .hideByCommon, .hideByFaculty');
                    // check to see if array is empty
                    if (visibleItems.length == 0) {
                        // when array is empty show the results message
                        $('.noResultsToShow').removeClass('hideResultsMessage');
                    } else {
                        // when array has content items suppress the results message
                        $('.noResultsToShow').addClass('hideResultsMessage');
                    }
                };
                parseItems.process = parseItemsToDisplay;
            });
            
            
            
            
            //   ***   Keyword Search   ***   //
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
                    //** parse out unselected content items and limit display to user selected items **/
                    parseItems.process();
                });
            });




            //   ***   Term Filter   ***   //
            $(function() {
                // When the Multi-Select Checkbox Selector for Academic Terms Changes - Execute change function 
                $('#SelectBox-ByTerm').change(function () {
                    // initialize an array of keys to hold each check box selected
                    let keys = [];
                    $(':checkbox:checked').each(function(item) {
                        keys[item] = $(this).val();
                    });
                    // If Search Key array has at least one valid value then Compare to the Each Content Item in term
                    if (keys[0]) {
                        $('.term').filter(function(i,e) {
                            var value = $(this).text();
                            // default state is hidden for all items
                            $(this).parents('.courseItemWrapper').addClass('hideByTerm');
                            // Check to see if any Key is a match with the current Value
                            for (let index = 0; index < keys.length; index++) {
                                if (value.match(keys[index])) {
                                    // make current item visible when we validate a match
                                    $(this).parents('.courseItemWrapper').removeClass('hideByTerm');
                                }
                            }
                        });
                    // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.courseItemWrapper').removeClass('hideByTerm');
                    }
                    // parse out unselected content items and limit display to user selected items
                    parseItems.process();
                });
            });




            //   ***   Module Filter   ***   //
            $(function () {
                // When the Dropdown Menu Selector Academic Terms Change - Execute change function
                $('#SelectBox-ByModule').change(function () {
                    let key;
                    let radioButtons = document.getElementsByName("SelectBox-ByModule");
                    for (let i = 0; i < radioButtons.length; i++) {
                        if (radioButtons[i].checked == true) {
                            // Assign Search Key
                            key = radioButtons[i].value;
                        }
                    }
                    // If Search Key is Not Null then Compare to the Term List Items in Each Content Item
                    if (key) {
                        $('.ucorModule').filter(function (i, e) {
                            var value = $(this).text();
                            // Check to see if the Key and Value are an exactly equal
                            if (key === value) {
                                $(this).parents('.courseItemWrapper').removeClass('hideByModule');
                            } else {
                                $(this).parents('.courseItemWrapper').addClass('hideByModule');
                            }
                        });
                        // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.courseItemWrapper').removeClass('hideByModule');
                    }
                    //** parse out unselected content items and limit display to user selected items **/
                    parseItems.process();
                });
            });




            //   ***   Type Filter   ***   //
            $(function() {
                // When the Dropdown Menu Selector Course Types Change - Execute change function
                $('#SelectBox-ByType').change(function () {
                    // Assign Search Key
                    let key = $(this).val();
                    // If Search Key is Not Null then Compare to the Type List Items in Each Content Item
                    if (key) {
                        $('.courseType').filter(function(i,e) {
                            var value = $(this).text();
                            // Check to see if the Key and Value are a Match
                            if (value.match(key)) {
                                $(this).parents('.courseItemWrapper').removeClass('hideByType');
                            } else {
                                $(this).parents('.courseItemWrapper').addClass('hideByType');
                            }
                        });
                    // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.courseItemWrapper').removeClass('hideByType');
                    }
                    //** parse out unselected content items and limit display to user selected items **/
                    parseItems.process();
                });
            });



            
            //   ***   Course Number Filter   ***   //
            $(function() {
                // When the Dropdown Menu Selector Course Number Changes - Execute change function
                $('#SelectBox-ByNumber').change(function () {
                    // Assign Search Key
                    let key = $(this).val();
                    // If Search Key is Not Null then Compare to the Term List Items in Each Content Item
                    if (key) {
                        $('.courseNumber').filter(function(i,e) {
                            var value = $(this).text();
                            // Check to see if the Key and Value are a Match
                            if (value.match(key)) {
                                $(this).parents('.courseItemWrapper').removeClass('hideByNumber');
                            } else {
                                $(this).parents('.courseItemWrapper').addClass('hideByNumber');
                            }
                        });
                    // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.courseItemWrapper').removeClass('hideByNumber');
                    }
                    //** parse out unselected content items and limit display to user selected items **/
                    parseItems.process();
                });
            });




            //   ***   Section Filter   ***   //
            $(function() {
                // When the Dropdown Menu Selector Section Changes - Execute change function
                $('#SelectBox-BySection').change(function () {
                    // Assign Search Key
                    let key = $(this).val();
                    // If Search Key is Not Null then Compare to the Term List Items in Each Content Item
                    if (key) {
                        $('.courseSection').filter(function(i,e) {
                            var value = $(this).text();
                            // Check to see if the Key and Value are a Match
                            if (value.match(key)) {
                                $(this).parents('.courseItemWrapper').removeClass('hideBySection');
                            } else {
                                $(this).parents('.courseItemWrapper').addClass('hideBySection');
                            }
                        });
                    // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.courseItemWrapper').removeClass('hideBySection');
                    }
                    //** parse out unselected content items and limit display to user selected items **/
                    parseItems.process();
                });
            });
        }, 10);
    });
});


</script>

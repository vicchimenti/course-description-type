/***
*   Education Abroad Program Filter Search Script
*   Victor Chimenti MSCS 2020
*   Last Modified 20200108
*   jQuery
*
*
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
                    var key = $(this).val().toLowerCase();
                    // filter the education abroad items for the input key
                    $(function () {
                        $('.educationAbroadItemWrapper').filter(function () {
                            // when the search key is not present in the item then hide the item
                            $(this).toggleClass('hideByText', !($(this).text().toLowerCase().indexOf(key) > -1));
                        });
                    });
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        var visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByFeature, .hideByHousing');
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
                    var key = $(this).val();
                    // If Search Key is Not Null then Compare to the Term List Items in Each Content Item
                    if (key) {
                        $('.term').filter(function(i,e) {
                            var value = $(this).text();
                            // Check to see if the Key and Value are a Match
                            if (value.match(key)) {
                                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByTerm');
                            } else {
                                $(this).parents('.educationAbroadItemWrapper').addClass('hideByTerm');
                            }
                        });
                    // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.educationAbroadItemWrapper').removeClass('hideByTerm');
                    }
                    // check results for null
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        var visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByFeature, .hideByHousing');
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


//   ***   Program Fee Filter   ***   //
$(function () {
    $(window).load(function () {
        setTimeout(function () {
            $(function() {
                $('#SelectBox-ByProgramFee').change(function () {
                    // Assign Search Key
                    var key = $(this).val();
                    // If Search Key is Not Null then Compare to the Term List Items in Each Content Item
                    if (key) {
                        $('.programFee').filter(function(i,e) {
                            var value = $(this).text();
                            // When the Selected Value is Numeric Compare with Content Items
                            if (!isNaN(key)) {
                                // When the Content Item is Numeric Parse for higher/lower values
                                if ((!isNaN(value)) && (value)) {
                                    var keyInt = Number(key);
                                    var valueInt = Number(value);
                                    // When the Content Value is Lower then Show the Item
                                    if (keyInt >= valueInt) {
                                        $(this).parents('.educationAbroadItemWrapper').removeClass('hideByProgramFee');
                                    // When the Content Value is Higher then Hide the Item
                                    } else {
                                        $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramFee');
                                    }
                                // Selected Value is Numeric and the Content Value is Not then Hide it
                                } else {
                                    $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramFee');
                                }
                            // When the Selected Value is Not Numeric compare both for a match
                            } else {
                                if (value.match(key)) {
                                    $(this).parents('.educationAbroadItemWrapper').removeClass('hideByProgramFee');
                                } else {
                                    $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramFee');
                                }
                            }
                        });
                    // When the Selected Value is NULL or Whitespace, reset the group and show all items
                    } else {
                        $('.educationAbroadItemWrapper').removeClass('hideByProgramFee');
                    }
                    // check results for null
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        var visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByFeature, .hideByHousing');
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
        }, 10);
    });
});


//   ***   Destination Filter   ***   //
$(function () {
    $(window).load(function () {
        setTimeout(function () {
            $(function() {
                $('#SelectBox-ByDestination').change(function () {
                    // Assign Search Key
                    var key = $(this).val();
                    // If Search Key is Not Null then Compare to the Term List Items in Each Content Item
                    if (key) {
                        $('.destination').filter(function(i,e) {
                            var value = $(this).text();
                            if (value.match(key)) {
                                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByDestination');
                            } else {
                                $(this).parents('.educationAbroadItemWrapper').addClass('hideByDestination');
                            }
                        });
                    } else {
                        $('.educationAbroadItemWrapper').removeClass('hideByDestination');
                    }
                    // check results for null
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        var visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByFeature, .hideByHousing');
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
        }, 10);
    });
});

//   ***   Feature Filter   ***   //
$(function () {
    $(window).load(function () {
        setTimeout(function () {
            $(function() {
                $('#SelectBox-ByFeature').change(function () {
                    // Assign Search Key
                    var key = $(this).val();
                    // If Search Key is Not Null then Compare to the Term List Items in Each Content Item
                    if (key) {
                        $('.feature').filter(function(i,e) {
                            var value = $(this).text();
                            if (value.match(key)) {
                                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByFeature');
                            } else {
                                $(this).parents('.educationAbroadItemWrapper').addClass('hideByFeature');
                            }
                        });
                    } else {
                        $('.educationAbroadItemWrapper').removeClass('hideByFeature');
                    }
                    // check results for null
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        var visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByFeature, .hideByHousing');
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
        }, 10);
    });
});


//   ***   Field of Study Filter   ***   //
$(function () {
    $(window).load(function () {
        setTimeout(function () {
            $(function() {
                $('#SelectBox-ByFieldOfStudy').change(function () {
                    // Assign Search Key
                    var key = $(this).val();
                    // If Search Key is Not Null then Compare to the Term List Items in Each Content Item
                    if (key) {
                        $('.fieldOfStudy').filter(function(i,e) {
                            var value = $(this).text();
                            if (value.match(key)) {
                                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByFieldOfStudy');
                            } else {
                                $(this).parents('.educationAbroadItemWrapper').addClass('hideByFieldOfStudy');
                            }
                        });
                    } else {
                        $('.educationAbroadItemWrapper').removeClass('hideByFieldOfStudy');
                    }
                    // check results for null
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        var visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByFeature, .hideByFieldOfStudy');
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
        }, 10);
    });
});


</script>

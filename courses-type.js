/***
*   @author Victor Chimenti, MSCS 2020
*   @file course-type.js
*
*   This new content type is being adapted from the education abroad program type
*   and is intended to replace the plain text course desctiptions shown in the
*   following link:
*   @see https://www.seattleu.edu/core/for-students/course-descriptions-20sq/
*
*   This content type will work in conjunction with the Organizer and each item
*   will contain one searchable, categorizable course.
*
*   @version 1.0
*/


try {
    /* -- Initialize function scope variables -- */
    var contentTitle = content.get("Name");
    var commonName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Common Course Name' output='normal' display_field='value' />");
    var courseNumber = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Course Number' output='normal' display_field='value' />");
    var section = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Section' output='normal' display_field='value' />");
    var courseType = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Course Type' output='normal' display_field='value' />");
    var courseModule = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Module' output='normal' display_field='value' />");
    var courseSummary = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Course Summary' output='normal' display_field='value' />");
    var properCourseName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Proper Course Name' output='normal' display_field='value' />");
    var courseDescription = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Course Description' output='normal' display_field='value' />");
    var term = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Term' output='normal' display_field='value' />");
    var year = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Year' output='normal' display_field='value' />");
    var faculty = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Faculty' output='normal' display_field='value' />");
    var prerequisites = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Prerequisites' output='normal' display_field='value' />");
    var groupDescription = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Group Description' output='normal' display_field='value' />");
    var keywords = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Keywords' output='normal' display_field='value' />");


    /* -- Wrap the content fields -- */
    var beginningHTML = '<div class="accordion courseItemWrapper" id="id<t4 type=\'meta\' meta=\'content_id\' />"><div class="accordion-group courseItem standardContent"><t4 type=\'meta\' meta=\'html_anchor\' />';
    var endingHTML = '</div></div>';

    /*  -- Parse out Runtime Generated Content IDs -- */
    var cardHeader = '<div class="card-header" id="heading<t4 type=\'meta\' meta=\'content_id\' />">';
    var buttonLink = '<button class="btn btn-link" type="button" id="button<t4 type=\'meta\' meta=\'content_id\' />" data-toggle="collapse" data-target="#collapse<t4 type=\'meta\' meta=\'content_id\' />" aria-expanded="false" aria-controls="collapse<t4 type=\'meta\' meta=\'content_id\' />">';
    var collapseDiv = '<div class="collapse" id="collapse<t4 type=\'meta\' meta=\'content_id\' />">';

    /* -- Write the card header -- */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
    document.write('<div class="card">');
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, cardHeader));
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, buttonLink));
    document.write('<span class="programTitleBox"><i class="fas fa-minus"></i><i class="fas fa-plus"></i><span class="programTitle">' + program + '</span></span></button>');
    document.write('<div class="programDestinationWrapper"><h5 class="programDestination">Destination: ' + dest + '</h5></div>');
    document.write('<div class="descriptionWrapper"><figure class="programImageWrapper"><img src="' + programImageMedia + '" alt="' + altImage + '" class="programImage" /><figcaption class="programImageCaption">' + city + '</figcaption></figure><p class="programDescription">' + generalDescription + '</p></div>');
    document.write('</div>');

    /* -- Write the collapsible body -- */
    document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, collapseDiv));

    /* -- Write Program Cards--*/
    document.write('<div class="card-body">');
    document.write('<div class="destinations" style="display: none"><ul class="destination">' + listOfDestinations + '</ul></div>');
    document.write('<div class="container-fluid">');

    /* -- Write Program Link- IF not null --*/
    if (externalWebsiteLink != "") {
      document.write('<div class="row externalLink boxlinks"><a class="programItemExternalWebsiteLink" target="_blank" href="' + externalWebsiteLink + '">Visit Program Website</a></div>');
    } else {
      document.write('<div class="row externalLink" style="display: none"><h1>No Link Provided</h1></div>');
    }

    /* -- Write Program Level 1 Summary Stats --*/
    document.write('<div class="row levelOne">');
    document.write('<div class="col-xs-12 col-sm-4 programDetails fees"><h5>SU Program Fee</h5><ul class="programFee">' + listOfProgramFees + '</ul></div>');
    document.write('<div class="col-xs-12 col-sm-4 programDetails gradePoint"><h5>GPA</h5><ul class="gpa"> ' + listOfGPA + '</ul></div>');
    document.write('<div class="col-xs-12 col-sm-4 programDetails types"><h5>Type</h5><ul class="programType"> ' + listOfTypes + '</ul></div>');
    document.write('</div>');
    /* -- Write Program Level 2 Summary Stats --*/
    document.write('<div class="row levelTwo">');
    document.write('<div class="col-xs-12 col-sm-4 programDetails languages"><h5>Language</h5><ul class="language">' + listOfLanguages + '</ul></div>');
    document.write('<div class="col-xs-12 col-sm-4 programDetails providers"><h5>Providers</h5><ul class="provider">' + listOfProviders + '</ul></div>');
    document.write('<div class="col-xs-12 col-sm-4 programDetails housingAccommodations"><h5>Housing</h5><ul class="housing"> ' + listOfHousing + '</ul></div>');
    document.write('</div>');
    /* -- Write Program Level 3 Details --*/
    document.write('<div class="row levelThree">');
    document.write('<div class="col-xs-12 programDetails terms"><h5>Term</h5><ul class="term">' + listOfTerms + '</ul></div>');
    document.write('</div>');
    /* -- Write Program Level 4 Details --*/
    document.write('<div class="row levelFour">');
    document.write('<div class="col-xs-12 programDetails features"><h5>Features</h5><ul class="feature">' + listOfFeatures + '</ul></div>');
    document.write('</div>');
    /* -- Write Program Level 5 Details --*/
    document.write('<div class="row levelFive">');
    document.write('<div class="col-xs-12 programDetails fieldOfStudy"><h5>Field of Study</h5><ul class="field">' + listOfStudyAreas + '</ul></div>');
    document.write('</div>');
    /* -- Write Program Level 6 Details --*/
    if (budget != "") {
      document.write('<div class="row levelSix">');
      document.write('<div class="col-xs-12 programDetails budget"><h5>Program Budgets</h5>' + budget + '</div>');
      document.write('</div>');
    } else {
      document.write('<div class="row levelSix budget" style="display: none"><h5>No Budget Provided</h5></div>');
    }
    /* -- Write Program Level 7 Details --*/
    if (prerequisites != "") {
      document.write('<div class="row levelSeven">');
      document.write('<div class="col-xs-12 programDetails prerequisites"><h5>Additional Prerequisites</h5><p>' + prerequisites + '</p></div>');
      document.write('</div>');
    } else {
      document.write('<div class="row levelSeven prerequisites" style="display: none"><h5>No Prerequisites Provided</h5></div>');
    }
    /* -- Write Program Level 8 Details --*/
    if (keyWords != "") {
      /* -- Keywords is a hidden field that is used to add searchable keywords when creating a program item but is not displayed on the live page -- */
      document.write('<div class="row levelEight">');
      document.write('<div class="col-xs-12 programDetails keyWords" style="display: none"><h5>Keywords</h5><p>' + keyWords + '</p></div>');
      document.write('</div>');
    } else {
      document.write('<div class="row levelEight keyWords" style="display: none"><h5>No Keywords Provided</h5></div>');
    }


    /* -- Write Closing Tags -- */
    document.write('');
    document.write(endingHTML);

  /* -- Error Checking -- */
} catch(err) {
  document.write(err.message);
}

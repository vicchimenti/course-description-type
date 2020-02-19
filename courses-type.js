  /***
  *     @author Victor Chimenti, MSCS 2020
  *     @file course-type.js
  *
  *     This new content type is being adapted from the education abroad program type
  *     and is intended to replace the plain text course desctiptions shown in the
  *     following link:
  *         @see https://www.seattleu.edu/core/for-students/course-descriptions-20sq/
  *
  *     This content type will work in conjunction with the Organizer and each item
  *     will contain one searchable, categorizable course.
  *
  *     Document will write once when the page loads
  *
  *     @version 1.1
  */



try {
  /* -- Initialize function scope variables -- */
  var contentTitle = content.get("Name");
  var commonName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Common Course Name' output='normal' display_field='value' />");
  var courseNumber = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Course Number' output='normal' display_field='value' />");
  // var courseSection = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Course Section' output='normal' display_field='value' />");
  var courseType = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Course Type' output='normal' display_field='value' />");
  // var ucorModule = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='UCOR Module' output='normal' display_field='value' />");
  // var courseSummary = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Course Summary' output='normal' display_field='value' />");
  var properCourseName = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Proper Course Name' output='normal' display_field='value' />");
  var courseDescription = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Course Description' output='normal' display_field='value' />");
  // var term = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Term' output='normal' display_field='value' />");
  var year = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Year' output='normal' display_field='value' />");
  var faculty = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Faculty' output='normal' display_field='value' />");
  // var facultyBioLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Faculty Profile Link' output='normal' display_field='value' />");
  var syllabus = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Syllabus' output='normal' display_field='value' />");
  var assignments = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Assignments' output='normal' display_field='value' />");
  var textbooks = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Textbooks' output='normal' display_field='value' />");
  var prerequisites = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Prerequisites' output='normal' display_field='value' />");
  var groupDescription = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Group Description' output='normal' display_field='value' />");
  var keyWords = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Keywords' output='normal' display_field='value' />");


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
  document.write('<span class="courseTitle"><i class="fas fa-minus"></i><i class="fas fa-plus"></i><span class="courseTitle">' + commonName + '</span></span></button>');  // close buttonLink tag

  /* -- Write the open viewable summary header -- */
  document.write('<div class="col-xs-12 courseSummaryWrapper">');
  document.write('<div class="row col-xs-12 courseSummaryHeader">');
  document.write('<div class="col-xs-12 col-sm-6 courseNumbers"><h5>Course Number: </h5><span class="courseNumber">' + courseNumber + '</span></div>');
  // document.write('<div class="col-xs-12 col-sm-3 courseSections"><h5>Section: </h5><span class="courseSection">' + courseSection + '</span></div>');
  document.write('<div class="col-xs-12 col-sm-6 courseTypes"><h5>Course Type: </h5><span class="courseType">' + courseType + '</span></div></div>'); // TODO: Temp closes courseSummaryHeader row div while ucorModule commented
  // document.write('<div class="col-xs-12 col-sm-3 ucorModules"><h5>Module: </h5><span class="ucorModule">' + ucorModule + '</span></div></div>'); // close the courseSummaryHeader row div
  document.write('<div class="row col-xs-12 courseSummaryHeader2">');
  // document.write('<div class="col-xs-12 col-sm-4 courseDetails terms"><h5>Term: </h5><span class="term">' + term + '</span></div>');
  document.write('<div class="col-xs-12 col-sm-6 courseDetails years"><h5>Year: </h5><span class="year">' + year + '</span></div>');
  document.write('<div class="col-xs-12 col-sm-6 courseDetails instructors"><h5>Faculty: </h5><span class="faculty">' + faculty + '</span></div>');
  // document.write('<div class="row col-xs-12 courseSummaries"><h5 class="courseSummary">Course Summary:</h5><span class ="courseSummary">' + courseSummary + '</span></div>');
  document.write('</div></div>'); // close courseSummaryWrapper courseSummaryHeader2 divs


  /* -- Write the collapsible body -- */
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, collapseDiv));

  /* -- Write Program Cards--*/
  document.write('<div class="card-body">');              // TODO: close this div? : where
  document.write('<div class="container-fluid">');        // TODO: close this div? : where

  /* -- Write the collapsed viewable summary header -- */
  document.write('<div class="col-xs-12 fullcourseDescriptionWrapper">');
  document.write('<div class="row col-xs-12 properCourseNames"><h5>Proper Course Name: </h5><span class="properCourseName">' + properCourseName + '</span></div>');
  document.write('<div class="row col-xs-12 courseDescriptions"><h5>Course Description: </h5><span class="courseDescription">' + courseDescription + '</span></div></div>');

  /* -- Write Program Level 1 Details --*/
  if (syllabus != "") {
    document.write('<div class="row levelOne">');
    document.write('<div class="col-xs-12 courseDetails syllabus" style="display: none"><h5>Syllabus</h5><p class="syllabus">' + syllabus + '</p></div>');
    document.write('</div>');
  } else {
    document.write('<div class="row levelOne syllabus" style="display: none"><h5>No Syllabus Provided</h5></div>');
  }

  /* -- Write Program Level 2 Details --*/
  if (assignments != "") {
    document.write('<div class="row levelTwo">');
    document.write('<div class="col-xs-12 courseDetails assignments" style="display: none"><h5>Assignments</h5><p class="assignments">' + assignments + '</p></div>');
    document.write('</div>');
  } else {
    document.write('<div class="row levelTwo assignments" style="display: none"><h5>No Assignments Provided</h5></div>');
  }

  /* -- Write Program Level 3 Details --*/
  if (textbooks != "") {
    document.write('<div class="row levelThree">');
    document.write('<div class="col-xs-12 courseDetails textbooks" style="display: none"><h5>Textbooks</h5><p class="textbooks">' + textbooks + '</p></div>');
    document.write('</div>');
  } else {
    document.write('<div class="row levelThree textbooks" style="display: none"><h5>No Textbooks Provided</h5></div>');
  }

  /* -- Write Program Level 4 Details --*/
  if (prerequisites != "") {
    document.write('<div class="row levelFour">');
    document.write('<div class="col-xs-12 courseDetails prerequisite"><h5>Prerequisites</h5><p class="prerequisites">' + prerequisites + '</p></div>');
    document.write('</div>');
  } else {
    document.write('<div class="row levelFour courseDetails prerequisite" style="display: none"><h5>No Prerequisites Provided</h5></div>');
  }

  /* -- Write Program Level 5 Details --*/
  if (groupDescription != "") {
    document.write('<div class="row levelFive">');
    document.write('<div class="col-xs-12 courseDetails groupDescriptions"><h5>Group Description: </h5><p class="standardContent groupDescription">' + groupDescription + '</p></div>');
    document.write('</div>');
  } else {
    document.write('<div class="row levelFive courseDetails" style="display: none"><h5>No Group Description Provided</h5></div>');
  }

  /* -- Write Program Level 6 Details --*/
  if (keyWords != "") {
    /* -- Keywords is a hidden field that is used to add searchable keywords when creating a program item but is not displayed on the live page -- */
    document.write('<div class="row levelSix">');
    document.write('<div class="col-xs-12 courseDetails keyWord" style="display: none"><h5>Keywords</h5><p class="keyWords">' + keyWords + '</p></div>');
    document.write('</div>');
  } else {
    document.write('<div class="row levelSix keyWords" style="display: none"><h5>No Keywords Provided</h5></div>');
  }


  /* -- Write Closing Tags -- */
  document.write('</div></div></div>');  // close the card-body and container-fluid and collapse div
  document.write('</div>'); // close the card
  document.write(endingHTML);

/* -- Error Checking -- */
} catch(err) {
    document.write(err.message);
}

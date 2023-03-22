// define a function to read a local file and display its contents
function readTextFile(file, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      var content = xhr.responseText;
      var lines = content.split("\n");
      callback(lines);
    }
  };
  xhr.open("GET", file, true);
  xhr.send();
}

// define a function to display a specific section of the file contents
function displaySection(lines, section) {
    console.log(lines);
    console.log(section);
  var start = lines.indexOf("[" + section + "]");
  if (start === -1) {
    console.error("Section " + section + " not found.");
    return;
  }

  var end = lines.slice(start + 1).findIndex(function (line) {
    return line.startsWith("[");
  });

  if (end === -1) {
    end = lines.length;
  } else {
    end += start + 1;
  }

  var sectionLines = lines.slice(start, end);
  var sectionText = sectionLines.slice(1).join("<br>"); // ignore the section label
  document.getElementById("section" + section).innerHTML = sectionText;
}

// the file path to read from
var filePath = "../problems.txt";

// read the file and display its contents
readTextFile(filePath, function (lines) {
  displaySection(lines, "1.1");
  displaySection(lines, "1.2");
  displaySection(lines, "1.3");
});

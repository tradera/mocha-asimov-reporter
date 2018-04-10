/**
 * Asimov reporter for mocha;
 */
var mocha = require("mocha");

function writeResult(message, status) {
  console.log(`##asimov-deploy[test='${message}' pass='${status}']\n\n`);
}

function AsimovReporter(runner) {
  mocha.reporters.Base.call(this, runner);
  var passes = 0;
  var failures = 0;

  runner.on("pass", function(test) {
    passes++;
    writeResult(test.fullTitle(), "true");
  });

  runner.on("fail", function(test, err) {
    failures++;
    writeResult(
      "fail: " + test.fullTitle() + " -- error: " + err.message,
      "false"
    );
  });

  runner.on("end", function() {
    console.log("end: %d/%d", passes, passes + failures);
    process.exit(failures);
  });
}

module.exports = AsimovReporter;

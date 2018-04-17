/**
 * Asimov reporter for mocha;
 */
var mocha = require("mocha");

function writeResult(message, status) {
  let m = encodeForAsimov(message);
  console.log(`##asimov-deploy[test='${m}' pass='${status}']\n\n`);
}

const encodeForAsimov = function(string2replace) {
  const search = "'";
  const replacement = '"';

  if (string2replace.length < 1) {
    return string2replace;
  }

  // remove invalid chars or encode them and finally strip unnecessary whitespace
  return string2replace.replace(new RegExp(search, "g"), replacement).replace(/\s\s+/g," ");
};

function AsimovReporter(runner) {
  mocha.reporters.Base.call(this, runner);
  let passes = 0;
  let failures = 0;  

  const customFullTitle = test => {
    return test.titlePath().join(" => ");
  };

  runner.on("pass", function(test) {
    passes++;
    writeResult(customFullTitle(test), "true");
  });

  runner.on("fail", function(test, err) {
    failures++;
    writeResult(
      `fail: ${customFullTitle(test)} -- ERROR: "${err.message}" -- STACKTRACE: "${err.stack}" -- TESTBODY "${test.body}"`,
      "false"
    );
  });

  runner.on("end", function() {
    console.log("end: %d/%d", passes, passes + failures);
    process.exit(failures);
  });
}

module.exports = AsimovReporter;

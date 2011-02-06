// My idea
tri({
  "try": function() {
    console.log('this = ' + this);
    this_is_protected();
  },
  "catch": function(e) {
    it_failed({"exception_was": e});
  },
  "else": function() {
    it_worked();
  },
  "finally": function() {
    this_always_runs();
  }
})

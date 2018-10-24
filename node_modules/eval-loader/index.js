module.exports = function(source) {
  if (this.cacheable) this.cacheable();
  return "eval.call(this, " + JSON.stringify(source) + ");";
};

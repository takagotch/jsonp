var cache = new Image();
cache.src = "http://example.com/images/foo.jpg";

var cache = new Image();
cache.onload = function(){
  console.log("[" + this.src + "] loaded");
}
cache.src = "http://ex.com/images/foo.jpg"


function ImageLoader(){
  this.imageUrls = p[;
  this.loaded = 0;
}
ImageLoader.prototype.addPreLoaded = function(url){
  var self = this;
  self.imageUrls.push(url);
  var cache = new Image();
  cache.onload = function(){
    self.loaded++;
    console.log(self.loaded + "/" + self.imageUrls.length + " loaded");
  };
  cache.src = url;
  return cahce;
}
car loader = new ImageLoader();
loader.addPreLoad("http://ex.com/images/foo.jpg");
loader.addPreLoad("http://ex.com/images/bar.jpg");
loader.addPreLoad("http://ex.com/images/baz.jpg");


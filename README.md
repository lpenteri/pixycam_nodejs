#pixycam_face_detection
Face detection using [rapp-platrform JS API](https://www.npmjs.com/package/rapp-platform-api) and Pixy cam to take snapshots.
In order to take those snapshots in nodejs a native nodejs module was written in c++ and built with node-cmake.
This native module takes the snapshot from pixycam through the use of [pixycam library](https://github.com/ortelio/pixycam_cpp).

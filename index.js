#!/usr/bin/env node

var fs = require('fs');
var pixycam = require('node-cmake')('pixycam_face_detection');
var RAPPCloud = require('rapp-platform-api/includes/cloud/RAPPCloud');
RAPPCloud.face_detection = require('rapp-platform-api/includes/cloud/face_detection'); 
var services = new RAPPCloud();

try {
    var buffer = pixycam.snap();
} catch(e) {
    return console.error(e);
}
/* 
function handler(faces)
{
    if (faces.length)
    {
        for (var i=0;i<faces.length;i++)
        {
            console.log("face " + (i+1) + ":");
            console.log("up_left_point: {x: " + faces[i].get_up_left_x() + ", y: " + faces[i].get_up_left_y() + "}"); 
            console.log("down_right_point: {x: " + faces[i].get_down_right_x() + ", y: " + faces[i].get_down_right_y() + "}");
        }
    }
	else
		console.log('No faces detected');
}

services.face_detection(buffer, 'png', handler);
*/

fs.writeFile('image.png', buffer, function(e) {
    if (e)
        return console.error(e);
    else
        console.log('image saved');
});


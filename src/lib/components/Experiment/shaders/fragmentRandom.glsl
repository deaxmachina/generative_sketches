uniform float uTime;
uniform float uAspectRatio;
uniform vec3 uColour1;
uniform vec3 uColour2;
varying vec2 vUv;

#pragma glslify: noise = require('glsl-noise/simplex/3d');

void main() {
  // Without movement
  vec3 colourA = vec3(uColour1);
  vec3 colourB = vec3(uColour2);

  float n = noise(vec3(vUv.xy, uTime));

  gl_FragColor = vec4(vec3(vUv.x), 1.0);
}
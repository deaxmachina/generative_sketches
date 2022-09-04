uniform float uTime;
uniform vec3 uColour1;
uniform vec3 uColour2;
uniform float uAspectRatio;
varying vec2 vUv;

void main() {
  // Without movement
  vec3 colourA = vec3(uColour1);
  vec3 colourB = vec3(uColour2);
  // Colour inside of a clipped circle 
  vec2 center = vUv - 0.5; // Center of the screen 
  //center.x *= uAspectRatio; // To get the aspect ratio right
  float dist = length(center); // Distance to the center
  vec3 colour = mix(colourA, colourB, vUv.y * sin(uTime) + vUv.x);
  //float alpha = step(dist, 0.25); // If dist < 0.25 return 0 else return 1 
  //float alpha = smoothstep(0.25, 0.5, dist); // If dist < 0.25 return 0. If dist > 0.5 return 1. Anywhere in between go smoothly betweel 0 and 1
  float alpha = smoothstep(0.4, 0.01, dist); // More blurry
  //float alpha = smoothstep(0.255, 0.25, dist); // Very lightly blurred edge

  gl_FragColor = vec4(colour, alpha);
}
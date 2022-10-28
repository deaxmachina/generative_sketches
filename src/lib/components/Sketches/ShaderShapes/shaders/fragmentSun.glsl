uniform float uTime;
uniform vec3 uColour1;
uniform vec3 uColour2;
varying vec2 vUv;

void main() {
  vec3 colourA = vec3(uColour1);
  vec3 colourB = vec3(uColour2);

  // Colour inside of a clipped circle 
  vec2 center = vUv - 0.5; // Center of the screen 
  float dist = length(center); // Distance to the center
  vec3 colour = mix(colourA, colourB, vUv.y * sin(uTime));
  float alpha = smoothstep(0.5, 0.4, dist); // More blurry

  gl_FragColor = vec4(colour, alpha);
}
uniform vec3 uColour; 
varying float vRandomStrength;
varying vec3 vRandomDirection;

void main() {
  vec3 colour = normalize(vRandomDirection) * 0.5 + 0.5;
  //gl_FragColor = vec4(colour, vRandomStrength);
  gl_FragColor = vec4(uColour, vRandomStrength);
}
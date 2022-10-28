uniform float uTime;
attribute float aRandom; 
varying float vRandom;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.z += aRandom * 0.5 + sin(uTime)*0.1;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;

  vRandom = aRandom;
}
uniform float uTime;
uniform float uExplosion;
attribute vec3 aRandomDirection; 
attribute float aRandomStrength;
varying float vRandomStrength;
varying vec3 vRandomDirection;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  modelPosition.xyz += aRandomDirection * aRandomStrength * uExplosion;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;
  gl_Position = projectionPosition;

  vRandomStrength = aRandomStrength;
  vRandomDirection = aRandomDirection;
}
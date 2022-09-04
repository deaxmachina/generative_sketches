uniform vec3 uColour;
varying float vRandom;

void main() {
    gl_FragColor = vec4(uColour, vRandom);
}
//#version 300 es

uniform mat4 projection;

layout (location = 0) in vec3 pos_ws;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec2 uv;

out vec3 vs_out_normal_ws;
out vec2 vs_out_uv;

uniform mat4 viewProjection;
uniform mat4 model;
uniform mat4 inverseTransposedModel;


void main() {
	vs_out_uv = uv;

	vs_out_normal_ws = (inverseTransposedModel * vec4(normal, 0.f)).xyz;
	gl_Position = viewProjection * model * vec4(pos_ws, 1.0);
}

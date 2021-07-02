//#version 300 es

precision mediump float;

out vec4 color;

in vec3 vs_out_normal_ws;
in vec2 vs_out_uv;

uniform sampler2D color_texture;


void main() {
	vec3 normal = normalize(vs_out_normal_ws);
	vec3 lightDir = normalize(vec3(1.f, 1.f, 1.f));

	float lighting = max(dot(normal, lightDir), 0.2);

	vec3 color_rgb = texture(color_texture, vs_out_uv).rgb * lighting;

	color = vec4(color_rgb, 1);
}
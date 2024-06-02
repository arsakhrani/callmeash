uniform vec3 uDeepColor;
uniform vec3 uSurfaceColor;

varying float vElevation;
varying vec3 vNormal;
varying vec3 vPosition;

vec3 pointLight(vec3 lightColor, float lightIntensity, vec3 normal, vec3 lightPosition, vec3 viewDirection, float specularPower, vec3 position, float lightDecay)
{
    vec3 lightDelta = lightPosition - position;
    float lightDistance = length(lightDelta);
    vec3 lightDirection = normalize(lightDelta);
    vec3 lightReflection = reflect(- lightDirection, normal);

    // Shading
    float shading = dot(normal, lightDirection);
    shading = max(0.0, shading);

    // Specular
    float specular = - dot(lightReflection, viewDirection);
    specular = max(0.0, specular);
    specular = pow(specular, specularPower);

    // Decay
    float decay = 1.0 - lightDistance * lightDecay;
    decay = max(0.0, decay);

    return lightColor * lightIntensity * decay * (shading + specular);
}

void main()
{
    vec3 viewDirection = normalize(vPosition - cameraPosition);
    vec3 normal = normalize(vNormal);

    float mixStrength = (vElevation + 0.3) * 0.675;
    mixStrength = smoothstep(0.0, 1.0, mixStrength);
    vec3 color = mix(uDeepColor, uSurfaceColor, mixStrength);

    vec3 light = vec3(0.0);
    light += pointLight(vec3(1.0), 2.0, normal, vec3(0.0, 2.0, 0.0), viewDirection, 30.0, vPosition, 0.03);
    color *= light;

    gl_FragColor = vec4(color, 1.0);
    
    #include <colorspace_fragment>
}
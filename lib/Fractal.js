function Fractal() {
    function fractalFBM(x, y, z, octaves, noiseCallback) {
        var t = 0, f = 1; 
        var sum = noiseCallback(x, y, z);
        for (var i = 1; i < octaves; i++) {
            t += 1/f;
            f *= 2;
            sum += noiseCallback(x * f, y * f, z * f) / f;
        }
        return sum / t;
    }
    
    function fractalBillow(x, y, z, octaves, noiseCallback) {
        var t = 0, f = 1;
        var sum = Math.abs(noiseCallback(x, y, z)) * 2 - 1;
        for (var i = 1; i < octaves; i++) {
            t += 1/f;
            f *= 2;
            sum += (Math.abs(noiseCallback(x * f, y * f, z * f)) * 2 - 1) / f;
        }
        return sum / t;
    }
    
    function fractalRigidMulti(x, y, z, octaves, noiseCallback) {
        var t = 0, f = 1;
        var sum = 1 - Math.abs(noiseCallback(x, y, z));
        for (var i = 1; i < octaves; i++) {
            t += 1/f;
            f *= 2;
            sum -= (1 - Math.abs(noiseCallbak(x * f, y * f, z * f))) / f
        }
        return sum / t;

    return {
        Classic: fractalFBM,
        Billow: fractalBillow,
        RigidMulti: fractalRigidMulti
    }
}

module.exports = Fractal;

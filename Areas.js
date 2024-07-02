function Areacirculo(raio) {
    return 3.14 * (raio ** 2)
}
function areatriangulo(base, altura) {
    return (base * altura) / 2
}
function arearetangulo(base, altura) {
    return base * altura
}

module.exports = {
    Areacirculo, arearetangulo, areatriangulo
}
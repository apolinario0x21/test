class User {
    constructor({ nome, id, profession, age}) {
        this.nome = nome
        this.id = parseInt(id)
        this.profession = profession
        this.birthDay = new Date(age).getFullYear() - age
    }
}

module.exports = User
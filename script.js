class User{
    constructor(_firstName, _lastName, _age, _location) {
       
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    agecomparison(y){
        if (this.age > y.age){
        return console.log(this.firstName,' è più vecchio di', y.firstName)
        }
        else {
            console.log(y.firstName, ' è più vecchio di ', this.firstName)
        }

    }
}

const Mario = new User ('Mario', 'Rossi', 23, 'Rome')

const Pino = new User ('Pino', 'Bianchi', 32,'Milan')

const Ugo = new User ('Ugo', 'Fantozzi', 44, 'Padova')

Mario.agecomparison(Pino)
Pino.agecomparison(Ugo)
Ugo.agecomparison(Mario)

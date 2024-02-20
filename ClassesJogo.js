class heroi{
    constructor(nomeHeroi, idadeHeroi, classeHeroi){
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.classeHeroi = classeHeroi;
    }
    atacar(){
        let ataque;

        switch (this.classeHeroi) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque';
        }

        console.log(`O ${this.classeHeroi} atacou usando ${ataque}`);
    }
}

const garen = new heroi('Garen', 25, 'guerreiro');
const ryze = new heroi('Ryze', 2000, 'mago');
const leeSin = new heroi('Lee sin', 32, 'monge');
const kennen = new heroi('Kennen', 25, 'ninja');

garen.atacar();
ryze.atacar();
leeSin.atacar();
kennen.atacar();
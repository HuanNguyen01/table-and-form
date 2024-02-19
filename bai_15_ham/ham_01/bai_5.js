
let stars = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
let constellation1 = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];
function find(star){
    for ( let i = 0; i < stars.length; i++){
        if (stars[i] === star){
            return constellation1[i];
        }
    }
}
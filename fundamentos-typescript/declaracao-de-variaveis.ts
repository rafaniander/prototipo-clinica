function iniciarTime(iniciaJogoEmUberlandia: boolean) {
    const nome: string = 'Messi e amigos';
    let cidade: string = 'em São Paulo';

    if (iniciaJogoEmUberlandia) {
        cidade = 'em Uberlândia'
    }    

    console.log(`${nome} vão jogar ${cidade}`);
}

iniciarTime(true);
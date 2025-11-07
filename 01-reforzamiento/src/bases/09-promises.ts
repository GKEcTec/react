const myPromise = new Promise<number>( (resolve, reject) => {
    setTimeout( () => {
        //! Yo quiwro mi dinero!!
        // resolve(100)
        reject('Mi amigo se perdió');
    }, 2000); // 2 segundos
})

myPromise.then(
    (myMoney) => {
        console.log(`Tengo mi dinero ${myMoney}`)
    }
).catch( reason => {
    console.warn(reason)
}).finally( () => {
    console.log('Pues a seguir con mi vida');
})

// https://api.giphy.com/v1/gifs/random?api_key=Qw2KloqaOA05dvFuBmojaOXJvRBhnTIg&tag=&rating=g

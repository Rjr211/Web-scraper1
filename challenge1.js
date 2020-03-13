const funct = () => {
    //Selects JSON-LD
    document.querySelector('script[type="application/ld+json"]');
    //parses JSON and stores in variable
    let jsonld = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText);
    //Accesses priceCurrency and stores currency in variable
    let currency = jsonld["@graph"][0].offers.priceCurrency;
    //grabs the price and stores in 'price' variable
    let price = document.querySelector('.style__PriceFontSize-gob4i1-0').textContent;
    
       return obj = {
            price: price,
            currency: currency
        }
    
    }
    funct();
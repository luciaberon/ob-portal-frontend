export const filterList = (offers,filters) => {
    let arr = [];
    if (offers && filters.length !== 0) {
        arr = offers.filter(item => {
            let coincidences = 0;
            for (let j = 0; j<filters.length; j++) {                    
                for (let i = 0; i<item.tecnologias.length; i++) {
                    if (item.tecnologias[i].nombre === filters[j]) {
                        coincidences = coincidences + 1;
                    } 
                } 
            }
            if (coincidences === filters.length) {
                return true;
            }
            return false;                   
        })
    return arr;
    
    } else {
        return offers;
    }
}
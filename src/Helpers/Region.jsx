
function regionColor(countryRegion) {

    switch (countryRegion) {
        case 'Africa':
            return 'blue';
        case 'Americas':
            return 'green';
        case 'Asia':
            return 'red';
        case 'Europe':
            return 'yellow'
        case 'Oceania':
            return 'purple'
    }
}

export default regionColor;
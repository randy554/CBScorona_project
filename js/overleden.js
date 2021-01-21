let coronaDodenData = data;

console.log('Test ', coronaDodenData);

console.log('Weg met empty strings: ', removeDataPointByEmptyField(coronaDodenData, 'Overleden'));


function removeDataPointByEmptyField(dataList, field) {

    return dataList.filter(value => {

        if (value[field] !== ""){
            return value;
        }

    });

}


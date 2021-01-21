const cbsCoronaData = data;

let listStorage;

console.log('CBS Groothandel omzet t.o.v. jaar eerder: ', cbsCoronaData);
let noEmptyFields = replaceEmptyFieldWith(cbsCoronaData, 'Omzetontwikkeling','No data');
console.log('No empty data points', noEmptyFields);
let dotSeparatedList = replaceInFieldWith(noEmptyFields, 'Omzetontwikkeling', ',','.');
console.log('Replace commas for dots: ', dotSeparatedList);
let floatedList = stringFieldToNumberField(dotSeparatedList, 'Omzetontwikkeling');
console.log('List with floats: ', floatedList);
let stringifyField = numberFieldToStringField(floatedList, 'Perioden');
console.log('Stringify field: ', stringifyField);
// let filteredList = filterListByKeyword(stringifyField, 'Perioden', '2019');
let filteredList = filterListByKeyword(stringifyField, 'Perioden', '2020 ');
// let filteredList = filterListByKeyword(stringifyField, 'Bedrijfstakken', 'ICT-apparatuur');
console.log('List filter by keyword: ', filteredList);
listStorage = storeList(filteredList);
console.log('New copy list: ', listStorage);

    // Turn a string field into a number field
    function stringFieldToNumberField (dataList, field) {

        return dataList.map(value => {

            if (value[field]) {
                value[field] = parseFloat(value[field]);
            }
            return value;

        });

    }

    // Turn a string field into a number field
    function numberFieldToStringField (dataList, field) {

        return dataList.map(value => {

            if (value[field]) {
                value[field] = String(value[field]);
            }
            return value;

        });

    }

    // Replace a found value within a field
    function replaceInFieldWith(dataList, field, searchFor, replaceWith) {

        return dataList.map(value => {

            if (value[field]) {
                value[field] = value[field].replace(searchFor, replaceWith);
            }

            return value;

        });

    }

    //  Detect & replace empty fields with string data
    function replaceEmptyFieldWith(dataList, field, replaceWith) {


        return dataList.map(value => {

            if (value[field].length === 0) {

                return replaceWith;

            } else {

                return value;

            }

        });

    }


    function filterListByKeyword(dataList, field, keyword) {

        return dataList.filter(value => {

            if((value[field].indexOf(keyword)) >= 0){
                return value;
            }
        });

    }

    function storeList(dataList) {

        let storage = [];
        storage["1500"] = dataList;
        return storage;
    }



const FILTRO = "FILTRO";
const REQUEST_PEOPLE_LIST = "REQUEST_PEOPLE_LIST";

export function requestPeople() {
    return {
        type: REQUEST_PEOPLE_LIST
    };
}

export function filter(value) {
    return {
        type: FILTRO,
        value
    };
}

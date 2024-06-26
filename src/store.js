import { reactive } from 'vue'

export const store = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    endpoint: {
        card: 'cardinfo.php',
        archetype: 'archetypes.php'
    },
    options: {
        params: {
            num: 20,
            offset: 0
        }
    },
    characters: [],
    archetypeList: [],
    meta: {},
    archetypeSelected : '',
    

})
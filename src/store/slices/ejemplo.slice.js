import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const ejemploSlice = createSlice({
		name: 'ejemplo', //nombre del estado
    initialState: 0, //primer valor
    reducers: {
        //funciones a ejecutar
    }
})

export const {  } = ejemploSlice.actions;

export default ejemploSlice.reducer;
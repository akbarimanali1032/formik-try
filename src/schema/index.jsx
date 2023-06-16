import * as Yup from 'yup';


export const valiDateSchema = Yup.object({
    fname: Yup.string().min(2).max(5).required('Enter A Name'),
    lname: Yup.string().required('Enter A Password'),
    email: Yup.string().required('Enter A email'),
    number: Yup.string().required('Enter number'),
    address: Yup.string().required('Enter address'),

})

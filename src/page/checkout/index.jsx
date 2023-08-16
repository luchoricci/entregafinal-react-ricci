import './styles.css'
import Input from '../../components/input'
import { useContext, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { CartContext } from '../../context/cart-context'

const initialState = {
    name : {value: '', error:'', hasError: true, active: false, name: 'name'},
    surname : {value: '', error:'', hasError: true, active: false, name: 'surname'},
    email : {value: '', error:'', hasError: true, active: false, name: 'email'},
    DNI : {value: '', error:'', hasError: true, active: false, name: 'DNI'},
    phone: {value: '', error:'', hasError: true, active: false, name: 'phone'},
    address: {value: '', error:'', hasError: true, active: false, name: 'address'},
    isFormValid: false, 

}

function Checkout() {
    const [formState, inputHandler, clearInputs, inputFocus, inputBlur] = useForm(initialState)
    const {cart} = useContext(CartContext)
    const onChange = (event) => {
        const {name, value} = event.target
        inputHandler({name, value})
    }

    const onFocus = ({name}) => {
        inputFocus({name})
        
    }

    const onBlur = ({name}) => {
        inputBlur({name})
    }
    
    const onHandlerOrder = async () => {
        const newOrder = {
            buyer: {
                name: formState.name.value,
                surname: formState.surname.value,
                DNI: formState.DNI.value,
                email: formState.email.value,
                phone: formState.phone.value,
                address: formState.address.value,
            },
            createdAt: new Date(),
            id: 1,
            items: cart,
            payment: {
                currency: '$',
                method: 'paypal',
                type:'cash',
            },
            seller: {
                name: 'maria',
                phone: '1144558899',
                email: 'maria@hotmail.com'
            },
            shipping: {
                deliverDate: new Date() + 7,
                trackingNumber: '11223344',
                type: 'DELIVERY'


            },
            total: total
        }
    }

const onSubmit = (event) => {
    event.preventDefault()
    console.log('formState', formState)
}

    return(
<div className="checkoutContainer" >
    <h1>Checkout</h1>
    <form onSubmit={onSubmit} className='checkoutForm' >
        <div className='checkoutFormcontainer'>
            <div className='checkoutFormInput'>
            <Input 
                    placeholder=''
                    id='name'
                    required={true}
                    name='name'
                    label='Name'
                    onChange={onChange}
                    onFocus={() => onFocus({name: 'name'})}
                    onBlur={() => onBlur({name: 'name'})}
                    active={formState.name.active}
                    error={formState.name.error}
                    hasError={formState.name.hasError}
                />


            </div>
            <div className='checkoutFormInput'>
            <Input 
                    placeholder=''
                    id='surname'
                    required={true}
                    name='surname'
                    label='Surname'
                    onChange={onChange}
                    onFocus={() => onFocus({name: 'surname'})}
                    onBlur={() => onBlur({name: 'surname'})}
                    active={formState.surname.active}
                    error={formState.surname.error}
                    hasError={formState.surname.hasError}
                />


            </div>
            <div className='checkoutFormInput'>
            <Input 
                    placeholder=''
                    id='email'
                    required={true}
                    name='email'
                    label='Email'
                    onChange={onChange}
                    onFocus={() => onFocus({name: 'email'})}
                    onBlur={() => onBlur({name: 'email'})}
                    active={formState.email.active}
                    error={formState.email.error}
                    hasError={formState.email.hasError}
                />


            </div>
            <div className='checkoutFormInput'>
            <Input 
                    placeholder=''
                    id='DNI'
                    required={true}
                    name='DNI'
                    label='D.N.I'
                    onChange={onChange}
                    onFocus={() => onFocus({name: 'DNI'})}
                    onBlur={() => onBlur({name: 'DNI'})}
                    active={formState.DNI.active}
                    error={formState.DNI.error}
                    hasError={formState.DNI.hasError}
                />


            </div>
            <div className='checkoutFormInput'>
            <Input 
                    placeholder=''
                    id='phone'
                    required={true}
                    name='phone'
                    label='Phone'
                    onChange={onChange}
                    onFocus={() => onFocus({name: 'phone'})}
                    onBlur={() => onBlur({name: 'phone'})}
                    active={formState.phone.active}
                    error={formState.phone.error}
                    hasError={formState.phone.hasError}
                />


            </div>
            <div className='checkoutFormInput'>
            <Input 
                    placeholder=''
                    id='address'
                    required={true}
                    name='address'
                    label='Address'
                    onChange={onChange}
                    onFocus={() => onFocus({name: 'address'})}
                    onBlur={() => onBlur({name: 'address'})}
                    active={formState.address.active}
                    error={formState.address.error}
                    hasError={formState.address.hasError}
                />

            </div>
        </div>
        <button type='submit' className='butttonCheckout'>Checkout</button>
    </form>

</div>

    )
}

export default Checkout
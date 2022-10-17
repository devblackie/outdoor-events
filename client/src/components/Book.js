
import React, { useState } from 'react';

export default function Book(submitForm) {

    // const{handleChange, values, handleSubmit,errors} = useForm(submitForm, validateInfo);
    const [fullName , setFullname] = useState("")
    const [email , setEmail] = useState("")
    const [pickUpLocation , setpickUpLocation] = useState("Kencom")
    const [phoneNumber , setPhoneNumber] = useState("")
    const [numberOfSlots , setNumberOfSlots] = useState(1)


    function handleSubmit(e) {
        e.preventDefault()

        const bookSlot = {
            fullName,
            email,
            pickUpLocation,
            phoneNumber,
            numberOfSlots
        }

        console.log(bookSlot)
            
    }

    function reset(){
        setFullname("")
        setEmail("")
        setpickUpLocation("Kencom")
        setPhoneNumber("")
        setNumberOfSlots(1)

    }

    return (
        <div className="Book">
				
            <form onSubmit={(e)=>handleSubmit(e)} >
                <div className="form-input">
                    {/* <h3>Mt longonot</h3> */}
                </div>
                <div className="form-input">
                    <label>Fullname:  </label>
                    <input type="text" name="firstName" value={fullName} onChange={(e)=>setFullname(e.target.value)} required/>
                </div>

                <div className="form-input">
                    <label>Email:  </label>
                    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>

            
                <div className="form-input">
                    <label>Pick up location:  </label>
                    <select className="pul" value={pickUpLocation} onChange={((e)=>setpickUpLocation(e.target.value))} required>
                        <option>Kencom</option>
                        <option>ABC</option>
                        <option>Thika</option>
                    </select>
                </div>
                <div className="form-input">
                    <label>Phone Number:  </label>
                    <input type="tel" name="whatsAppNumber" value={phoneNumber} onChange={((e)=>setPhoneNumber(e.target.value))} required/>
                </div>
                <div className="form-input">
                    <label>Number of Slots:  </label>
                    <input type="number" name="Number of Slots"  min="1" value={numberOfSlots} onChange={((e)=>setNumberOfSlots(e.target.value))} required/>
                </div>

                <div className="form-input">
                    <button className="btn" type="submit" name="Book slots">Book Slot</button> <br></br>
                    <button className="btn" type="reset" name="reset" onClick={reset}>Reset</button>
                </div>
            </form>

        </div>
    );
}
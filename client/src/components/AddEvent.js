import React ,{useState}from "react";


export default function AddEvent({url,setEvents,events}){

    const [location, setLocation] = useState("")
    const [amount , setAmount] = useState("")
    const [image , setImage] = useState("")


    function handleSubmit(e) {
        e.preventDefault()

        const event = {
            location,
            amount,
            image,
        }
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(event),
        })
            .then((r) => r.json())
            .then((data) => {
                setEvents([...events,data])
                //  console.log(data)

                window.location='/gallery';
                })

    }


    return (
        <div className="Book">
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="form-input">
                    <label>Location: </label>
                    <input type="text" name="location" value={location} onChange={(e)=>setLocation(e.target.value)} required/>
                </div>
                <div className="form-input">
                    <label>Amount: </label>
                    <input type="number" name="amount" value={amount} onChange={(e)=>setAmount(e.target.value)} required/>
                </div>
                <div className="form-input">
                    <label>Image: </label>
                    <input type="url" name="image" value={image} onChange={(e)=>setImage(e.target.value)} required/>
                </div>
                <div className="form-input">
                    <button className="btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
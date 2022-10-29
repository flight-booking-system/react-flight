import React from 'react'

const Payment = () => {
  return (
    <>
    <h2>Payment Form</h2>
        <form method="POST">
            <h4>Account</h4>
            <div class="input-group">
                <div class="input-box">
                    <input type="text" placeholder="First Name" required class="name"/>
                </div>
                <div class="input-box">
                    <input type="text" placeholder="Last Name" required class="name"/>
                </div>
            </div>
            <div class="input-group">
                <div class="input-box">
                    <input type="email" placeholder="Email Adress" required class="name"/>
                </div>
            </div>
            <div class="input-group">
                <div class="input-box">
                    <h4> Date of Birth</h4>
                    <input type="text" placeholder="DD" class="dob"/>
                    <input type="text" placeholder="MM" class="dob"/>
                    <input type="text" placeholder="YYYY" class="dob"/>
                </div>
                <div class="input-box">
                    <h4> Gender</h4>
                    <input type="radio" id="b1" name="gender" checked class="radio"/>
                    <label for="b1">Male</label>
                    <input type="radio" id="b2" name="gender" class="radio"/>
                    <label for="b2">Female</label>
                </div>
            </div>
            <div class="input-group">
                <div class="input-box">
                    <h4>Payment Details</h4>
                    <input type="radio" name="pay" id="bc1" checked class="radio"/>
                    <label for="bc1"><span><i class="fa fa-cc-visa"></i> Credit Card</span></label>
                    <input type="radio" name="pay" id="bc2" class="radio"/>
                    <label for="bc2"><span><i class="fa fa-cc-paypal"></i> Paypal</span></label>
                </div>
            </div>
            <div class="input-group">
                <div class="input-box">
                    <input type="tel" placeholder="Card Number" required class="name"/>
                </div>
            </div>
            <div class="input-group">
                <div class="input-box">
                    <input type="tel" placeholder="Card CVV" required class="name" id="CVV"/>
                </div>
                <div class="input-box">
                    <select>
                        <option>01 jan</option>
                        <option>01 feb</option>
                        <option>01 mar</option>
                        <option>01 apr</option>
                        <option>01 may</option>
                        <option>01 jun</option>
                        <option>01 jul</option>
                        <option>01 aug</option>
                        <option>01 sep</option>
                        <option>01 oct</option>
                        <option>01 nov</option>
                        <option>01 dec</option>
                    </select>
                    <select>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                    </select>
                </div>
            </div>
            <div class="input-group">
                <div class="input-box">
                    <button type="submit">PAY NOW</button>
                </div>
		    <div class="input-box">
                    <button onClick={cancel()} type="submit" name={"CANCEL BOOKING"}>CANCEL</button>
                </div>
            </div>
        </form>
    </>
  )
}

export default Payment
export const Step4 = (props: any) => {
  return (
    <div>
      <div className='row'>
        <div className='bg-blue-100 font-normal p-2 my-2' style={{ fontSize: 12, borderRadius: 3 }}>
          Please note: A 6-digit verification code has been sent via text message to your registered phone number</div>
      </div>
      <div className="row">
        <label style={{ width: "40%" }} className="column-label">
          ID Number:
        </label>
        <label style={{ width: "60%", fontWeight: 100, color: 'black' }} className="column-label">
          {props.paymentInfo.idNumber}
        </label>
      </div>
      <div className="row">
        <label style={{ width: "40%" }} className="column-label">
          Phone Number:
        </label>
        <label style={{ width: "60%", fontWeight: 100, color: 'black' }} className="column-label">
          {props.paymentInfo.phoneNumber}
        </label>

      </div>
      <div className="row">

        <label
          className="column-label"
        >OTP:</label>
        <label
          className="column-label"
        ></label>
        <input
          onChange={(e: any) =>
            props.setPaymentInfo({
              ...props.paymentInfo,
              otp2: e.target.value,
            })
          } type='tel' maxLength={6} id='timer'
          value={props.paymentInfo.otp2} />
      </div>
    </div>
  )
}
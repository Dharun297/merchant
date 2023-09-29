import React, { useState } from "react";

const MerchantForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("credit-card");
  const [shippingOptions, setShippingOptions] = useState<string[]>([]);
  const [merchantData, setMerchantData] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "radio" && checked) {
      setPaymentMethod(value);
    } else if (type === "checkbox") {
      if (checked) {
        setShippingOptions([...shippingOptions, value]);
      } else {
        setShippingOptions(shippingOptions.filter((so) => so !== value));
      }
    } else {
      // For text inputs like name and email
      if (name === "name") {
        setName(value);
      } else if (name === "email") {
        setEmail(value);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMerchant = {
      name,
      email,
      paymentMethod,
      shippingOptions,
    };
    setMerchantData([...merchantData, newMerchant]);
    clearForm();
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPaymentMethod("credit-card");
    setShippingOptions([]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Payment Method:</label>
          <input
            type="radio"
            id="card"
            name="payment"
            value="card"
            checked={paymentMethod === "card"}
            onChange={handleChange}
          />{" "}
          Card
          <input
            type="radio"
            id="cash"
            name="payment"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={handleChange}
          />{" "}
          Cash
          <input
            type="radio"
            id="UPI"
            name="payment"
            value="upi"
            checked={paymentMethod === "upi"}
            onChange={handleChange}
          />{" "}
          Upi
        </div>
        <div>
          <label>Shipping Options:</label>
          <input
            type="checkbox"
            id="boat"
            name="shipping"
            value="boat"
            checked={shippingOptions.includes("boat")}
            onChange={handleChange}
          />{" "}
          Boat
          <input
            type="checkbox"
            id="casino"
            name="shipping"
            value="casino"
            checked={shippingOptions.includes("casino")}
            onChange={handleChange}
          />{" "}
          Casino
          <input
            type="checkbox"
            id="cargo"
            name="shipping"
            value="cargo"
            checked={shippingOptions.includes("cargo")}
            onChange={handleChange}
          />{" "}
          Cargo
          <input
            type="checkbox"
            id="periyakappal"
            name="shipping"
            value="periyakappal"
            checked={shippingOptions.includes("periyakappal")}
            onChange={handleChange}
          />{" "}
          Periyakappal
        </div>
        <button type="submit">Submit</button>
      </form>

      <h2>Merchant Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Payment Method</th>
            <th>Shipping Options</th>
          </tr>
        </thead>
        <tbody>
          {merchantData.map((merchant, index) => (
            <tr key={index}>
              <td>{merchant.name}</td>
              <td>{merchant.email}</td>
              <td>{merchant.paymentMethod}</td>
              <td>{merchant.shippingOptions.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MerchantForm;

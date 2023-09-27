interface Members{
name: string;
email: string;
phone: number;
contactname: string;
contactemail: string;
contactphone: number;
website: string;
notes: string;
business: string[];
category: string[];
Commission: number;
active: number;
logo: string;
transactions:string[]

}
function Myform(){


 
  return(
    <div>
<form id="newform"/>
<label>Name</label>
<input type="text" id="name"placeholder="Ajith" required/><br/>
<label>Email</label>    
<input type="text" id="email" placeholder="abc@gmail.com" /><br/>
<label>Phone</label>
  <input type="tel" id="phone" placeholder="+91 1234567890" required/><br/>
  <label>Contact Name</label>
  <input type="text" id="contactname" placeholder="Ranjith" required/><br/>
  <label>Contact Email</label>
  <input type="text" id="contactemail" placeholder="xyz@gmail.com" required/><br/>
  <label>Contact Phone</label>
  <input type="tel" id="contactphone" placeholder="+91 9087654321" required/><br/>
  <label>Website</label>
  <input type="text" id="website" placeholder="ex: www.amazon.com" required/><br/>
  <label>Notes</label>
  <textarea id="notes" placeholder="Describe your notes here" rows={6}/><br/>
  <label>Business Type</label>
  <input type="radio" name="business" value="" />Small Business
  <input type="radio" name="business" value=""/>Entreprise
  <input type="radio" name="business" value=""/>Entrepreneur<br/>
<label>Category</label>
<input type="checkbox" name="category" value=""/>Clothes
<input type="checkbox" name="category" value=""/>Toys
<input type="checkbox" name="category" value=""/>Groceries
<input type="checkbox" name="category" value=""/>Electronics
<input type="checkbox" name="category" value=""/>Digital<br/>
<label>Commission Percentage</label> 
<input type="number" id="commission" name="commission" max="100" required/><br/>

<label>Active From</label>
<input type="date" id="date" name="active"/><br/>
<label>Logo</label>
<input type="file" accept="image/*" id="logo"/><br/>
<label>Payment Options</label>
  <input type="radio" id="transaction" name="transactions"/>Internet Banking
  <input type="radio" id="transaction" name="transactions"/>UPI
  <input type="radio" id="transaction" name="transactions"/>Cash On Delivery<br/>
<button>Submit</button> 
<table id="displaytable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>PhoneNumber</th>
                    <th>Website</th>
                    <th>ContactName</th>
                    <th>ContactNumber</th>
                    <th>ContactMail</th>
                    <th>Notes</th>
                    <th>Type</th>
                    <th>Category</th>
                    <th>Commission</th>
                    <th>Activeform</th>
                    <th>LOGO</th>
                    <th>Critical Account</th>
                    <th>Payment</th>
                    <th>Actions</th>
                </tr>
            </thead>
            
        </table>     
  
  </div>
  )
}
export default Myform;
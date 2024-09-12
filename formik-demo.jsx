
import { Formik, useFormik } from "formik"

export function FromikDemo()
{

    const formik=useFormik({
        initialValues :{
            userName:'',
            userAge:'',
            userCity:'',
            userGender:''
        },
        onSubmit:(values)=>{
            console.log(`name:${values.userName}\n age:${values.userAge}\n city:${values.userCity}\n gender:${values.userGender}`);
            alert("Data successfully submited to the Database...");
        }
    })
    return(
        <>
          <div className="d-flex justify-content-center">
             <form className="w-25 border border-1 bg-light m-4 p-3 shadow-lg rounded-1" onSubmit={formik.handleSubmit}>
                <h2 className="text-center text-info-emphasis">User Registration</h2>
                <dl>
                    <dt className="form-label">Enter User Name</dt>
                    <dd><input type="text" placeholder="Enter Name" name="userName" onChange={formik.handleChange} className="form-control"/></dd>
                    <dt className="form-label">Enter User Age</dt>
                    <dd><input type="number" placeholder="Enter Age" name="userAge" onChange={formik.handleChange} className="form-control"/></dd>
                    <dt className="form-label">City</dt>
                    <dd>
                        <select name="userCity" className="form-select m-0" onChange={formik.handleChange}>
                            <option value="Select City">Select City</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Pune">Pune</option>
                        </select>
                    </dd>
                    <dt className="form-label">Gender</dt>
                    <dd>
                        <input type="radio" name="userGender" value="male" className="form-check-input" onChange={formik.handleChange}/> <label className="form-check-label">Male</label>
                        <input type="radio" name="userGender" value="female" className="form-check-input" onChange={formik.handleChange}/> <label className="form-check-label">Female</label>   
                    </dd>
                </dl> 
                <button className="btn btn-primary w-100 my-3" onSubmit={formik.handleSubmit}>Submit</button>
             </form>
          </div>
        </>
    )
}
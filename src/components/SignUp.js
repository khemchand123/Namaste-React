import { useFormik } from 'formik';

const SignUp = () => {
    const validate = (values) => {
        const errors = {};
        if(!values.firstName){
            errors.firstName = 'Required'
        } else if(values.firstName.length > 5){
            errors.firstName = 'Must be 5 characters or less'
        }

        if(!values.lastName){
            errors.lastName = 'Required'
        } else if(values.lastName.length > 5){
            errors.lastName = 'Must be 5 characters or less'
        }

        if(!values.email){
            errors.email = 'Required'
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
            errors.email = 'Invalid email address'
        }
        return errors;
    }
    const formik = useFormik({
        initialValues : {
            firstName: "",
            lastName: "",
            email: ""
        },
        validate,
        onSubmit : (values) => {
            alert(JSON.stringify(values, null, 3));
        }
    });

    return (
        <div className="signup">
            <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name :</label>
                <input 
                    type="text"
                    name="firstName" 
                    id="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (<div className="error">{formik.errors.firstName}</div>) : null}

                <label htmlFor="lastName">Last Name :</label>
                <input 
                    type="text"
                    name="lastName" 
                    id="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.lastName &&  formik.errors.lastName ? (<div className="error">{formik.errors.lastName}</div>) : null}

                <label htmlFor="email">Email Address :</label>
                <input 
                    type="email"
                    name="email" 
                    id="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (<div className="error">{formik.errors.email}</div>) : null}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;
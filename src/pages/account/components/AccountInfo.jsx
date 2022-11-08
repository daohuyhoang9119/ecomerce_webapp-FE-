import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslate } from "../../../core/Translate";
import { useForm,ErrorMessage  } from './../../../core/useform';
import { updateAction } from './../../../redux/action/authAction';



function AccountInfo() {
  let { t } = useTranslate();
  let dispatch = useDispatch();

  let {login, dataUser} = useSelector((store) => store.authReducer)
  
  //handle day-month-year
  let yearNow = new Date().getFullYear();
  const [day, setDay] = useState();
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(yearNow);
  let date = new Date(year, month, 0);
  let dayArray = date.getDate();

  let {register, handleSubmit, error,form} = useForm(
    {
      first_name: dataUser.first_name,
      last_name : dataUser.last_name,
      username: dataUser.email,
      gender: dataUser.gender || "male",
      password: "",
      confirm_password: "",
    },
    {
      message:{
        first_name: {
          require: "Trường này không được để trống ",
        },
        last_name: {
          require: "Trường này không được để trống ",
        },
        username: {
          require: "Email không được để trống ",
          pattern: "Email không đúng định dạng",
        },
        password: {
          require: "Password không được để trống",
          
        },
        confirm_password: {
          require: "Password không được để trống",
        },
      }
    }
  )

  function handleSelectOption(e){
    let name = e.target.name;
    let value = e.target.value;

    if(name === 'year') setYear(parseInt(value));
    if(name === 'month') setMonth(parseInt(value));
    if(name === 'day') setDay(parseInt(value));
  }

  function formChangeInfoSubmit(form){
    console.log(form);
    console.log('-----------');
    dispatch(updateAction(form));
  }

  return (
    <form onSubmit={handleSubmit(formChangeInfoSubmit)}>
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="accountFirstName">{t(`First Name *`)}</label>
            <input
              className="form-control form-control-sm"
              id="accountFirstName"
              // type="text"
              placeholder="First Name *"
              // defaultValue="Daniel"
              // required
              {...register("first_name",{require:true})}
            />
            <ErrorMessage error={error.first_name}/>
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="accountLastName">{t(`Last Name *`)}</label>
            <input
              className="form-control form-control-sm"
              id="accountLastName"
              type="text"
              placeholder="Last Name *"
              // defaultValue="Robinson"
              // required
              {...register("last_name",{require:true})}
            />
            <ErrorMessage error={error.last_name}/>
          </div>
        </div>
        <div className="col-12">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="accountEmail">{t(`Email Address *`)}</label>
            <input
              className="form-control form-control-sm"
              id="accountEmail"
              type="email"
              placeholder="Email Address *"
              defaultValue="user@email.com"
              // required
              {...register("username",{require:true, pattern:'email'})}
            />
            <ErrorMessage error={error.username}/>
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* Password */}
          <div className="form-group">
            <label htmlFor="accountPassword">{t(`Current Password *`)}</label>
            <input
              className="form-control form-control-sm"
              // id="accountPassword"
              type="password"
              placeholder="Current Password *"
              // required
              {...register("password",{require:true,min: 6,
                max: 32})}
            />
            <ErrorMessage error={error.password}/>
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* Password */}
          <div className="form-group">
            <label htmlFor="AccountNewPassword">{t(`New Password *`)}</label>
            <input
              className="form-control form-control-sm"
              // id="AccountNewPassword"
              type="password"
              placeholder="New Password *"
              // required
                {...register("confirm_password",{
                  require: true,
                  min: 6,
                  max: 32,
                })}
            />
            <ErrorMessage error={error.confirm_password}/>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          {/* Birthday */}
          <div className="form-group">
            {/* Label */}
            <label>{t(`Date of Birth`)}</label>
            {/* Inputs */}
            <div className="form-row">
              <div className="col-auto">
                {/* Date */}
                <label className="sr-only" htmlFor="accountDate">
                  {t(`Date`)}
                </label>
                <select
                  className="custom-select custom-select-sm"
                  id="accountDate"
                  name="day"
                  value={day}
                  onChange={handleSelectOption}
                >
                  {/* <option>10</option>
                  <option>11</option>
                  <option selected>12</option> */}
                  {
                     [...Array(dayArray)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)
                  }
                </select>
              </div>
              <div className="col">
                {/* Date */}
                <label className="sr-only" htmlFor="accountMonth">
                  {t(`Month`)}
                </label>
                <select
                  className="custom-select custom-select-sm"
                  id="accountMonth"
                  name='month'
                  value={month}
                  onChange={handleSelectOption}
                >
                  {/* <option>{t(`January`)}</option>
                  <option selected>{t(`February`)}</option>
                  <option>{t(`March`)}</option> */}
                  {
                     [...Array(12)].map((e, i) => <option value={i + 1} key={i}>{i + 1}</option>)
                  }
                </select>
              </div>
              <div className="col-auto">
                {/* Date */}
                <label className="sr-only" htmlFor="accountYear">
                  {t(`Year`)}
                </label>
                <select
                  className="custom-select custom-select-sm"
                  id="accountYear"
                  name='year'
                  value={year}
                  onChange={handleSelectOption}
                >
                  {/* <option>1990</option>
                  <option selected>1991</option>
                  <option>1992</option> */}
                  {
                     [...Array(50)].map((e, i) => <option value={yearNow - i} key={i}>{yearNow - i}</option>)
                  }
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          {/* Gender */}
          <div className="form-group mb-8">
            <label>{t(`Gender`)}</label>
            <div className="btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-sm btn-outline-border active">
                <input type="radio" name="gender" defaultChecked/>
                {t(`Male`)}
              </label>
              <label className="btn btn-sm btn-outline-border">
                <input type="radio" name="gender" /> 
                {t(`Female`) }
              </label>
            </div>
          </div>
        </div>
        <div className="col-12">
          {/* Button */}
          <button className="btn btn-dark" type="submit" onS>
            {t(`Save Changes`)}
          </button>
        </div>
      </div>
    </form>
  );
}

export default AccountInfo;

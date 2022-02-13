import {addItemAA} from "../redux/asyncAction";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { Form, Formik, Field } from 'formik/dist/index';
import Modal from 'react-modal';
import * as Yup from 'yup';
import * as moment from 'moment/moment';
import './AddItem.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const AddItem = () => {
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

//валидация чтобы формат приходил верный всегда
    let validationSchema = Yup.object().shape({
        date: Yup.date().required(),
        distance: Yup.number().required(),
    });

    const submitForm = (values) => {
        const body = {
            id: '',
            date: values.date,
            distance: values.distance,
        };

        body.id = Date.now(); //задать айдишник
        body.date = moment(body.date).format("MM.DD.YYYY");
        dispatch(addItemAA(body));
        setIsOpen(false)
    };


    return(
<div>
   <div >
       <button
           onClick={ toggleModal }
           className="button"
       >   <i className="fa fa-plus"> </i> Добавить </button>

   </div>
       <Modal
        className = "modal"
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog">

<div>
    <Formik
        initialValues={{
            date: "",
            distance: "",
        }}
        validationSchema={validationSchema}
        render={({ setFieldValue, values}) => (
            <Form>
                <div className="alert">
                <div>
                    <div>

                        <DatePicker
                            autoComplete="off"
                            name="date"
                            showYearDropdown
                            maxDate={new Date()}
                            selected={values.date}
                            placeholderText={"Дата"}
                            onChange={(e) => {
                                setFieldValue('date', e)
                            }}
                        />


                    </div>
                    <div>
                        <Field
                            type="text"
                            name="distance"
                            placeholder={"Расстояние"}
                        />
                    </div>
                </div>
                </div>
                <div className='buttonEnd'>
                    <button
                        onClick={()=>{submitForm(values)}}
                        className="button"
                    > &nbsp;&nbsp; &nbsp;&nbsp;
                        <i className="fa fa-plus">&nbsp; </i> &nbsp; &nbsp; Добавить&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; </button>
                </div>
            </Form>
        )}
    />
</div>

    </Modal>
</div>
    )
}

export default AddItem;
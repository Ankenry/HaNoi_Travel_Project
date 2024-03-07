import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// import { useDispatch } from "react-redux";
// import { login } from "../../Store/userSlice";

// Validation by schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email is valid !!!")
    .required("Please enter email !!!"),
  password: yup.string().required("Please enter password."),
});

const LoginModal = ({ isOpen, onClose }) => {
  // const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const API_URL = "http://localhost:3001/account";

  const onSubmit = async (data) => {
    try {
        const response = await axios.get(
          `${API_URL}?email=${data.email}&password=${data.password}`
        );
        const users = response.data;
        if (users.length > 0) {
            const user = users[0];
            alert(`Welcome back ${user.name}!`);
            // dispatch(login({ userName: users[0].name }));
            window.location.reload();
        } else {
          alert("Account or password is incorrect!");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while logging in!");
      }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          padding: "50px",
          border: "1px solid #ccc",
          borderRadius: "50px",
          backgroundColor: "rgba(222,209,195,0.9)",
          display: "flex",
          gap: "40px",
        },
      }}
    >
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login_form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Account"
            {...register("email")}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <button className="button btn_login" type="submit">
          Login
        </button>
      </form>
    </Modal>
  );
};

export default LoginModal;

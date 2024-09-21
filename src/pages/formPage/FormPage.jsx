import  {useState} from 'react';
import {useForm} from "react-hook-form";

 function  FormPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [users, setUsers] = useState([]);

  const onSubmit = (data) => {
    setUsers([...users, data]);
    reset();
  };

  const deleteUser = (index) => {
    setUsers(users.filter((_, i) => i !== index));
  };


  const clearTable = () => {
    setUsers([]);
  };

  return (
    <div>
      <h2>User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            type="text"
            className={errors.name && "error"}
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && <small>write your  name</small>}
        </label>
        <br />

        <label>
          <input
            type="text"
             className={errors.userName && "error"}
            placeholder="Username"
            {...register("userName", { required: true })}/>
          {errors.userName && <small>write your user name</small>}
        </label>
        <br />


        <label>
          <input
            type="email"
             className={errors.email && "error"}
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <small>write your email</small>}
        </label>
        <br />



        <label>
          <input
            type="tel"
            placeholder="tel"
            {...register("tel", { required: true })}
          />
          {errors.tel && <small>write your number</small>}
        </label>
        <br />



        <label>
          <input
            type="text"
            placeholder="Website"
            {...register("website")}
          />
        </label>
        <br />


        <button type="submit">Создать</button>
        <button type="button" onClick={clearTable}>Очистить таблицу</button>
      </form>

      <h3>Таблица пользователей</h3>
      {users.length === 0 ? (
        <p>Таблица пуста</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>name:</th>
              <th>username:</th>
              <th>Email:</th>
              <th>phone number:</th>
              <th>website:</th>
              <th>doging:</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.tel}</td>
                <td>{user.text || '—'}</td>
                <td>
                  <button onClick={() => deleteUser(index)}>Удалить</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FormPage;
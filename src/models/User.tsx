type UserProps = {
  username: string;
  password: string;
};

class User {
  username: string;
  password: string;

  constructor(props: UserProps) {
    this.username = props.username;
    this.password = props.password;
  }

  login(username:string,password:string) {
    return this.username === username && this.password === password
  }


}

export default User;
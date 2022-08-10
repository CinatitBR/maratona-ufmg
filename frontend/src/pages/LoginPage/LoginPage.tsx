import AuthPageWrapper from '../../components/AuthPageWrapper/AuthPageWrapper'
import LogoHeaderBox from '../../components/LogoHeaderBox/LogoHeaderBox'
import ExternalButtonList from '../../components/ExternalButtonList/ExternalButtonList'
import FormAuth from '../../components/FormAuth/FormAuth'
import Field from '../../components/Field/Field'
import Link from '../../components/Link/Link'

const LoginPage = () => {
  return <AuthPageWrapper>

    <LogoHeaderBox text="Log in to account" />

    <ExternalButtonList />

    <FormAuth 
      buttonText="Sign in"
      switchLink={
        <Link href="#">Don't have an account?</Link>
      }
    >
      <Field 
        type="email" 
        name="email"
        placeholder="Email"
      />

      <Field 
        type="password" 
        name="password"
        placeholder="Password"
      />
    </FormAuth>

  </AuthPageWrapper>
}

export default LoginPage
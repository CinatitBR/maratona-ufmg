import AuthPageWrapper from '../../components/AuthPageWrapper/AuthPageWrapper'
import LogoHeaderBox from '../../components/LogoHeaderBox/LogoHeaderBox'
import ExternalButtonList from '../../components/ExternalButtonList/ExternalButtonList'
import FormAuth from '../../components/FormAuth/FormAuth'
import Field from '../../components/Field/Field'
import FormLink from '../../components/FormLink/FormLink'

const LoginPage = () => {
  return <AuthPageWrapper>

    <LogoHeaderBox text="Log in to account" />

    <ExternalButtonList />

    <FormAuth 
      buttonText="Sign in"
      switchLink={
        <FormLink href="/signup">Don't have an account?</FormLink>
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
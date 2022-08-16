import AuthPageWrapper from '../../components/AuthPageWrapper/AuthPageWrapper'
import LogoHeaderBox from '../../components/LogoHeaderBox/LogoHeaderBox'
import ExternalButtonList from '../../components/ExternalButtonList/ExternalButtonList'
import FormAuth from '../../components/FormAuth/FormAuth'
import Field from '../../components/Field/Field'
import FormLink from '../../components/FormLink/FormLink'

const SignupPage = () => {
  return <AuthPageWrapper>
    <LogoHeaderBox text="Create an account" />

    <ExternalButtonList />
    
    <FormAuth 
      buttonText="Sign up"
      switchLink={<FormLink href="/login">Already have an account?</FormLink>}
    >
      <Field 
        type="text" 
        name="username" 
        placeholder="Username"
      />

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

export default SignupPage
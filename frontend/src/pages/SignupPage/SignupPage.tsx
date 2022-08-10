import AuthPageWrapper from '../../components/AuthPageWrapper/AuthPageWrapper'
import LogoHeaderBox from '../../components/LogoHeaderBox/LogoHeaderBox'
import ExternalButtonList from '../../components/ExternalButtonList/ExternalButtonList'
import FormAuth from '../../components/FormAuth/FormAuth'
import Field from '../../components/Field/Field'
import Link from '../../components/Link/Link'

const SignupPage = () => {
  return <AuthPageWrapper>
    <LogoHeaderBox text="Create an account" />

    <ExternalButtonList />
    
    <FormAuth 
      buttonText="Sign up"
      switchLink={<Link href="/login">Already have an account?</Link>}
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
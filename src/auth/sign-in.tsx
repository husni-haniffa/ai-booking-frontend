import { SignIn } from "@clerk/clerk-react"

const SignInPage : React.FC = () => {
    return (
        <div className="flex min-h-svh justify-center items-center">
            <SignIn/>
        </div>
    )
}

export default SignInPage;
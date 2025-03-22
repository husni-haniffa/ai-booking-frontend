import { SignUp } from "@clerk/clerk-react"

const SignUpPage : React.FC = () => {
    return (
        <div className="flex min-h-svh justify-center items-center">
            <SignUp/>
        </div>
    )
}

export default SignUpPage;
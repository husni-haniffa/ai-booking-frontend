import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"


interface ButtonLoadingProps {
  children?: React.ReactNode; 
  className?: string;
}

const  ButtonLoading: React.FC<ButtonLoadingProps> = ({children, className}) => {
  return (
    <Button disabled className={className}>
      <Loader2 className="animate-spin" />
      {children}
    </Button>
  )
}

export default ButtonLoading

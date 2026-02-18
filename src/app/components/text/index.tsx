import styles from './text.module.css'

type Props = {
    children: React.ReactNode;
    className?: string; 
}

const Text = ({children, className} : Props) => {
    return(
        <p className={className}>{children}</p>
    );
}

export default Text;
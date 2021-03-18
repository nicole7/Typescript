interface ChildProps {
    color: string;
    //doesn;'t take any params and doesnt return a value
    onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            <button> onClick={onClick} Click me</button>
            {color}
        </div>
    )
};

//'Child' will be a REact function component
//'Child' might have properties assigned to it like 'propTypes' and 'contectTypes'
//'Child' will receive props of type 'ChildProps'
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return <div>
        <button> onClick={onClick} Click me</button>
        {color}
        {children}
    </div>
};


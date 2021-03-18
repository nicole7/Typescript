import { Child } from './Child';
import { ChildAsFC } from './Child';

const Parent = () => {
    //ChildAsFC can be written this way because children prop gets properly passed down from the Function Component vs Typescript (doesnt know) which cannot pass them down 
    //unless you manually add annotation to your interface
    return (
        <div>
            <Child
                color="red"
                onClick={() => console.log('Clicked')}
            />
            <ChildAsFC
            color="red"
            onClick={() => console.log('Clicked')} >
                
            </ChildAsFC>
        </div>
    )
};

export default Parent;
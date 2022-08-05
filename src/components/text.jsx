export default function Test(){
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'gray', 'black'];
    const pColors = colors.map(color => <p>{color}</p>);
    return (
        <div className="text-white text-xl font-bold">{pColors}</div>
    );
}
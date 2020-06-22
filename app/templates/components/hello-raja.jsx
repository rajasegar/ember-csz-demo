export default function HelloRaja({name, onChange}) {
 const inputPrefix = 'New name:';
 return (
   <>
   <h1>JSX templates for Ember!</h1>
   <p>Hello, {name}!</p><br />
   {inputPrefix}: <input class="my-input" value={name} onkeyup={onChange}/>
   </>
 )
}

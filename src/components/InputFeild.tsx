import React from "react";

interface Props {
    member: string;
    setMember: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent)=>void;
}

const InputField:React.FC<Props> = ({member, setMember, handleAdd}) => {

    
    return(
        <form className="new-member-form" onSubmit={handleAdd}>
    <label htmlFor="name">Nom de l&apos;Argonaute</label>
    <input id="name" name="name" type="text" placeholder="Charalampos" value={member} onChange={(e)=>setMember(e.target.value)}/>
    <button type="submit">Envoyer</button>
  </form>
    )
}
export default InputField
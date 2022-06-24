import React from "react";
import {Member} from "./model"

interface Props {
    members:Member[];
    setMembers: React.Dispatch<React.SetStateAction<Member[]>>;
}

const List:React.FC<Props> = ({members, setMembers}) => {
    return(
        <section className="member-list">
        {
            members.map(member=>(
                <li key={member.id}>{member.member}</li>
            ))
            }
      </section>
    )
}
export default List
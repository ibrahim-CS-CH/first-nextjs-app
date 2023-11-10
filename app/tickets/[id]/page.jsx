//built function to get all list of ids that exist
// export async function generateStaticParams () {
//     const res = await fetch ("http://localhost:4000/tickets");
//     const tickets = await res.json();
//     return tickets.map((ticket)=> ({
//         id: ticket.id
//     }))
// }

import { notFound } from "next/navigation"

async function getTicket ( id ) {
    await new Promise(resolve=>setTimeout(resolve,3000));

    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        next: {
            revalidate: 60
        }
    })

    if (!res.ok){
        notFound();        
    }
    return res.json();
}


export default async function TicketDetails({ params }) {
    const ticket = await getTicket(params.id);
    console.log(ticket);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
        {/* <div className="ml-auto">
          {data.session.user.email === ticket.user_email && (
            <DeleteIcon id={ticket.id} />
          )}
        </div> */}
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  )
}

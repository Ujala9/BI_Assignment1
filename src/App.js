import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import Header from "./components/Header"
import { Link } from "react-router-dom"
import useFetch from "./useFetch";

export default function App() {
   const [filterType, setFilterType] = useState("")

   const { data, loading, error} = useFetch("https://bi-assignment1-backend-mu.vercel.app/events")

   console.log(data)

  // const events = [
  //   {
  //     id: 1,
  //     title: "Tech Conference",
  //     type: "offline",
  //     date: "Thu Jul 13 2023 • 7:00:00 AM IST",
  //     image: "https://placehold.co/300x300"
  //   },
  //   {
  //     id: 2,
  //     title: "Design Workshop",
  //     type: "online",
  //     date: "Mon Jul 10 2023 • 2:00:00 PM IST",
  //     image: "https://placehold.co/300x300"
  //   },
  //   {
  //     id: 3,
  //     title: "Marketing Seminar",
  //     type: "offline",
  //     date: "Tue Aug 15 2023 • 10:00:00 AM IST",
  //     image: "https://placehold.co/300x300"
  //   },
  //   {
  //     id: 1,
  //     title: "Tech Conference",
  //     type: "offline",
  //     date: "Thu Jul 13 2023 • 7:00:00 AM IST",
  //     image: "https://placehold.co/300x300"
  //   },
  //   {
  //     id: 2,
  //     title: "Design Workshop",
  //     type: "online",
  //     date: "Mon Jul 10 2023 • 2:00:00 PM IST",
  //     image: "https://placehold.co/300x300"
  //   },
  //   {
  //     id: 3,
  //     title: "Marketing Seminar",
  //     type: "offline",
  //     date: "Tue Aug 15 2023 • 10:00:00 AM IST",
  //     image: "https://placehold.co/300x300"
  //   }
  // ];


  const filteredEvents = filterType ? data?.filter((event) => event.type === filterType) : data

  return (
    <>
    <Header/>
     <div className="position-relative text-center">
      <h1 className=" text-success display-1 fw-bold my-5 py-3 ">MeetUp Events</h1>
       <select className="position-absolute top-50 end-0 form-select translate-middle-y me-3"
        onChange={(e) => setFilterType(e.target.value)} value={filterType} style={{ maxWidth: "200px" }}>
          <option value="">Select event Type</option>
          <option value="online">Online Event</option>
          <option value="offline">Offline Event</option>
       </select>
       </div>
      <section className="container">
        <div className="row my-4 ">
        {filteredEvents?.map((event) => (
                  <div key={event._id} className="col-md-4 mb-5">
                  <div className="position-relative card">
                    <span class="badge bg-light text-dark position-absolute  start-0 m-3 p-2 fw-bold">
                             {event.type}
                      </span>
                      <img src={event.image} alt="img1" className="img-fluid" style={{height: "300px", objectFit: "cover" }} />
                    <div className="card-body">
                       <p className="card-text"><small className="text-body-secondary">{event.date} - {event.startTime} IST</small></p>
                     <h5 className="card-title">{event.title}</h5>
                     <Link to={`/details/${event._id}`} className="btn btn-success">Details</Link>
                   </div>
                  </div>
                  </div>
        ))}
        </div>
      </section>
    </>
  );
}

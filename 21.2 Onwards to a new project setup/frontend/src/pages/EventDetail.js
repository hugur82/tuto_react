import { useRouteLoaderData, json } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData("event-detail");
  return (
    <>
      <EventItem event={data.event}> </EventItem>
    </>
  );
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "cannot fetcch the detauk of the id " + id },
      { status: 500 }
    );
  } else {
    return response;
  }
}

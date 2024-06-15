import { acceptInvitation } from "@/Redux/Project/Action";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const AcceptInvitation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const urlParams = new URLSearchParams(location.search);
  //   const token = urlParams.get("token");

  const handleAcceptInvitation = () => {
    const urlParams = new URLSearchParams(location.search);
    const token = urlParams.get("token");
    dispatch(acceptInvitation({ token, navigate }));
  };
  return (
    <div className="h-[85vh] flex flex-col justify-center items-center">
      <h1 className="py-5 font-semibold text-xl">
        you are invited to join the project
      </h1>
      <Button onClick={handleAcceptInvitation} className="">
        Accept Invitation
      </Button>
    </div>
  );
};

export default AcceptInvitation;

import { useParams } from "react-router-dom";
import TextTemplate from "../../../common/TextTemplate";
import { data } from "./r√©visionData";

const BourseR√©visionDetails = () => {
  const { name } = useParams();
  const [content] = data.filter(({ keyword }) => keyword === name);

  return <TextTemplate content={content} />;
};
export default BourseR√©visionDetails;

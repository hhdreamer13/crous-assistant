import { useParams } from "react-router-dom";
import TextTemplate from "../../common/TextTemplate";
import { data } from "./bourseComplĂ©mentairesData";

const BourseComplĂ©mentairesDetails = () => {
  const { name } = useParams();
  const [content] = data.filter(({ keyword }) => keyword === name);

  return <TextTemplate content={content} />;
};
export default BourseComplĂ©mentairesDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContentStore } from "../store/content";
import axios from "axios";

const WatchPage = () => {
  const { id } = useParams();
  const [trailers, setTrailers] = useState([]);
  const [loading, setloading] = useState(true);
  const [content, setContent] = useState({});
  const [similerContent, setSimilerContent] = useState([]);
  const { contentType } = useContentStore();
  console.log(id);
  console.log(trailers, similerContent);
  useEffect(() => {
    const getTrailers = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/${id}/trailers`);
        setTrailers(res.data.trailers);
      } catch (error) {
        if (error.message.includes("404")) {
          setTrailers([]);
        }
      }
    };
    getTrailers();
  }, [contentType, id]);
  useEffect(() => {
    const getSimilerContent = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/${id}/similar`);
        setSimilerContent(res.data.similar);
      } catch (error) {
        if (error.message.includes("404")) {
          setSimilerContent([]);
        }
      }
    };
    getSimilerContent();
  }, [contentType, id]);
  return <div>WatchPage</div>;
};

export default WatchPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContentStore } from "../store/content";
import axios from "axios";
import Header from "../components/shared/Header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TrailerSlider from "../components/sliders/TrailerSlider";
import ContentDetails from "../components/ContentDetails";

const WatchPage = () => {
  const { id } = useParams();
  const [trailers, setTrailers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState({});
  const [similarContent, setSimilarContent] = useState([]);
  const [contentCredits, setContentCredits] = useState([]);
  const { contentType } = useContentStore();
  console.log(id);

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
    const getSimilarContent = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/${id}/similar`);
        setSimilarContent(res.data.similar);
      } catch (error) {
        if (error.message.includes("404")) {
          setSimilarContent([]);
        }
      }
    };
    getSimilarContent();
  }, [contentType, id]);
  useEffect(() => {
    const getContentDetails = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/${id}/details`);
        setContent(res.data.content);
      } catch (error) {
        if (error.message.includes("404")) {
          setContent([]);
        }
      } finally {
        setLoading(false);
      }
    };
    getContentDetails();
  }, [contentType, id]);
  useEffect(() => {
    const getContentCredits = async () => {
      try {
        const res = await axios.get(`/api/v1/${contentType}/${id}/credits`);
        setContentCredits(res.data.credits);
      } catch (error) {
        if (error.message.includes("404")) {
          setContentCredits([]);
        }
      }
    };
    getContentCredits();
  }, [contentType, id]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto container  pt-28">
        <TrailerSlider trailers={trailers} content={content} />
        <ContentDetails content={content} />
      </div>
    </div>
  );
};

export default WatchPage;

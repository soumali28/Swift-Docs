import {
  AiOutlineMergeCells,
  AiOutlineCompress,
  AiOutlineFileWord,
} from "react-icons/ai";
import { FaFilePowerpoint } from "react-icons/fa";

export const tools = [
  {
    titile: "Merge PDF",
    desp: "Combine PDFs in any order with the easiest PDF merger available.",
    fill: "#B2533E",
    icon: <AiOutlineMergeCells />,
    link: "/pdf/merge",
  },
  {
    titile: "PDF to Word",
    desp: "Convert PDFs to doc files with 100% accuracy.",
    fill: "#176B87",
    icon: <AiOutlineFileWord />,
    link: "/pdf_to_word",
  },
  {
    titile: "PDF to PowerPoint",
    desp: "Convert PDFs to pptx files with 100% accuracy.",
    fill: "#22668D",
    icon: <FaFilePowerpoint />,
    link: "/pdf_tp_ppt",
  },
  {
    titile: "Compress PDF",
    desp: "Reduce file size while obtaining for maximal PDF quality.",
    fill: "#79AC78",
    icon: <AiOutlineCompress />,
    link: "/pdf/compress",
  },
  {
    titile: "Word to PDF",
    desp: "Convert doc to PDF files with 100% accuracy.",
    fill: "#176B87",
    icon: <AiOutlineFileWord />,
    link: "word_to_pdf",
  },
  {
    titile: "PowerPoint to Word",
    desp: "Convert pptc to PDF files with 100% accuracy.",
    fill: "#22668D",
    icon: <FaFilePowerpoint />,
    link: "ppt_to_pdf",
  },
];

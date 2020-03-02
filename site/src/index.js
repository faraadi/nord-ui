import './index.css';
import { clipboard } from "modules";

const codeSample = document.querySelector("code");
clipboard(codeSample, codeSample.innerText);
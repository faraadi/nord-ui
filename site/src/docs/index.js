import './docs.css';
import { navigationCallback } from 'modules';

const links = document.querySelectorAll(".doc-link");
if(links) links.forEach( link =>  link.onclick = navigationCallback);
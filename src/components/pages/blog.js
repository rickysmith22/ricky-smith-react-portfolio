import React from 'react';
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div>
        <h2>Content...</h2>
        <div>
            <Link to="/about-me">Read more about myself</Link>
        </div>
    </div>
  )
}

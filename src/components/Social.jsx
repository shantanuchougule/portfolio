import React from 'react';
import './Social.css';

function Social() {
    return (
    <div class="flex flex-col space-y-4 bg-cyan-300 p-4 rounded-lg">
     <a class="text-black text-2xl" href="#">
      <i class="fab fa-linkedin">
      </i>
     </a>
     <a class="text-black text-2xl" href="#">
      <i class="fab fa-github">
      </i>
     </a>
     <a class="text-black text-2xl" href="#">
      <i class="fab fa-instagram">
      </i>
     </a>
     <a class="text-black text-2xl" href="#">
      <i class="fas fa-envelope">
      </i>
     </a>
    </div>
 );
}
export default Social;
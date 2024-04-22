import React from 'react';
import './social.css';
import { ReactComponent as Facebook } from '../assets/shared/desktop/facebook.svg';
import { ReactComponent as Instagram } from '../assets/shared/desktop/instagram.svg';
import { ReactComponent as Pinterest } from '../assets/shared/desktop/pinterest.svg';
import { ReactComponent as Twitter } from '../assets/shared/desktop/twitter.svg';
import { ReactComponent as Youtube } from '../assets/shared/desktop/youtube.svg';

export default function Social(props) {
  const { socialClass } = props;

  return (
    <div className={socialClass}>
      <Facebook className="facebook social" />
      <Youtube className="youtube social" />
      <Twitter className="twitter social" />
      <Pinterest className="pinterest social" />
      <Instagram className="instagram social" />
    </div>
  );
}

import Image from 'next/image';
import { Fragment } from 'react';
import Link from 'next/link';
import shape from '@/assets/img/icons/shape.svg';
import SvgIconCom from '../common/svg-icon-anim';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './style.css';
type ModelProps = {
  showModel: any;
  setShowModel: React.Dispatch<React.SetStateAction<any>>;
};
export default function Model({ showModel, setShowModel }: ModelProps) {
  return (
    <Fragment>
      <div style={{ position: 'relative', width: '100%' }}>
        <Lightbox
          mainSrc={showModel.img.src}
          // imageTitle={'TBD'}
          onCloseRequest={() => setShowModel({})}
          enableZoom={false}
        />
        <span
          style={{
            zIndex: '99999',
            position: 'fixed',
            // inset: '0px',
            top: '1%',
            left: '50%',
            transform: 'translate(-50%)',
            fontSize: '1.3em',
            fontWeight: '700',
            color: '#FFBE18',
          }}
        >
          TBD
        </span>
        <div
          style={{
            zIndex: '999999',
            position: 'fixed',
            inset: '0px',
            top: '85%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          className="banner__btn wow bounceInLeft"
          data-wow-delay=".6s"
        >
          <Link
            href="/marketplace"
            className="tg-btn-3 tg-svg mx-auto"
            style={{
              width: '120px',
              height: '75px',
            }}
          >
            <SvgIconCom icon={shape} id="svg-1" />
            <span>View</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

import Image from 'next/image';
import { Fragment } from 'react';
import Link from 'next/link';
import shape from '@/assets/img/icons/shape.svg';
import SvgIconCom from '../common/svg-icon-anim';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useRouter } from 'next/navigation';
type ModelProps = {
  showModel: any;
  setShowModel: React.Dispatch<React.SetStateAction<any>>;
};
export default function Model({ showModel, setShowModel }: ModelProps) {
  const router = useRouter();
  return (
    <Fragment>
      <div style={{ position: 'relative', width: '100%' }}>
        <Lightbox
          mainSrc={showModel.img.src}
          imageTitle={`${showModel.title}`}
          onCloseRequest={() => setShowModel({})}
          enableZoom={false}
        />
        <div
          style={{
            zIndex: '999999',
            position: 'fixed',
            inset: '0px',
            top: '5%',
            left: '20px',
            fontSize: '1.2em',
            fontWeight: '700',
            color: '#FFBE18',
          }}
        >
          TBD
        </div>
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

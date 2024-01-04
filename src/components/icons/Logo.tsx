import { Colors, colors } from '@styles/colorPalette';

interface LogoProps {
  width?: number
  height?:number
  color?: Colors
  onClick?: () => void
}

function Logo({
  width = 97, height = 19, color = 'black', onClick,
}: LogoProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 97 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path d="M6.16927 0.593898H8.60127L10.1403 5.0589L11.6983 0.593898H14.1113L11.7933 6.7309L13.5033 11.0249L17.3223 0.555898H20.1723L14.7763 14.0459H12.5153L10.1403 8.3839L7.78427 14.0459H5.52327L0.146275 0.555898H2.95827L6.79628 11.0249L8.46828 6.7309L6.16927 0.593898ZM18.8559 11.1009C18.8559 10.4549 19.0333 9.89123 19.3879 9.4099C19.7553 8.9159 20.2619 8.5359 20.9079 8.2699C21.5539 8.0039 22.2949 7.8709 23.1309 7.8709C23.5489 7.8709 23.9733 7.90256 24.4039 7.9659C24.8346 8.02923 25.2083 8.13056 25.5249 8.2699V7.7379C25.5249 7.10456 25.3349 6.6169 24.9549 6.2749C24.5876 5.9329 24.0366 5.7619 23.3019 5.7619C22.7573 5.7619 22.2379 5.8569 21.7439 6.0469C21.2499 6.2369 20.7306 6.51556 20.1859 6.8829L19.3689 5.2109C20.0276 4.78023 20.6989 4.45723 21.3829 4.2419C22.0796 4.02656 22.8079 3.9189 23.5679 3.9189C24.9866 3.9189 26.0886 4.27356 26.8739 4.9829C27.6719 5.69223 28.0709 6.70556 28.0709 8.0229V11.1959C28.0709 11.4619 28.1153 11.6519 28.2039 11.7659C28.3053 11.8799 28.4636 11.9496 28.6789 11.9749V14.0459C28.4509 14.0839 28.2419 14.1156 28.0519 14.1409C27.8746 14.1662 27.7226 14.1789 27.5959 14.1789C27.0893 14.1789 26.7029 14.0649 26.4369 13.8369C26.1836 13.6089 26.0253 13.3302 25.9619 13.0009L25.9049 12.4879C25.4743 13.0452 24.9359 13.4759 24.2899 13.7799C23.6439 14.0839 22.9853 14.2359 22.3139 14.2359C21.6553 14.2359 21.0599 14.1029 20.5279 13.8369C20.0086 13.5582 19.5969 13.1846 19.2929 12.7159C19.0016 12.2346 18.8559 11.6962 18.8559 11.1009ZM25.0499 11.6139C25.1893 11.4619 25.3033 11.3099 25.3919 11.1579C25.4806 11.0059 25.5249 10.8666 25.5249 10.7399V9.7329C25.2209 9.60623 24.8916 9.51123 24.5369 9.4479C24.1823 9.3719 23.8466 9.3339 23.5299 9.3339C22.8713 9.3339 22.3266 9.47956 21.8959 9.7709C21.4779 10.0496 21.2689 10.4232 21.2689 10.8919C21.2689 11.1452 21.3386 11.3859 21.4779 11.6139C21.6173 11.8419 21.8199 12.0256 22.0859 12.1649C22.3519 12.3042 22.6686 12.3739 23.0359 12.3739C23.4159 12.3739 23.7896 12.3042 24.1569 12.1649C24.5243 12.0129 24.8219 11.8292 25.0499 11.6139ZM33.4445 14.2359C32.5959 14.2359 31.7852 14.0966 31.0125 13.8179C30.2399 13.5392 29.5749 13.1276 29.0175 12.5829L29.9295 10.9299C30.5249 11.4112 31.1075 11.7659 31.6775 11.9939C32.2602 12.2219 32.8175 12.3359 33.3495 12.3359C33.8435 12.3359 34.2362 12.2472 34.5275 12.0699C34.8315 11.8926 34.9835 11.6266 34.9835 11.2719C34.9835 11.0312 34.9012 10.8476 34.7365 10.7209C34.5719 10.5816 34.3312 10.4612 34.0145 10.3599C33.7105 10.2586 33.3369 10.1446 32.8935 10.0179C32.1589 9.77723 31.5445 9.5429 31.0505 9.3149C30.5565 9.0869 30.1829 8.8019 29.9295 8.4599C29.6889 8.10523 29.5685 7.65556 29.5685 7.1109C29.5685 6.45223 29.7332 5.88856 30.0625 5.4199C30.4045 4.93856 30.8732 4.5649 31.4685 4.2989C32.0765 4.0329 32.7859 3.8999 33.5965 3.8999C34.3059 3.8999 34.9772 4.0139 35.6105 4.2419C36.2439 4.45723 36.8202 4.8119 37.3395 5.3059L36.3135 6.9209C35.8069 6.52823 35.3255 6.24323 34.8695 6.0659C34.4135 5.8759 33.9512 5.7809 33.4825 5.7809C33.2165 5.7809 32.9632 5.81256 32.7225 5.8759C32.4945 5.93923 32.3045 6.0469 32.1525 6.1989C32.0132 6.33823 31.9435 6.5409 31.9435 6.8069C31.9435 7.04756 32.0069 7.23756 32.1335 7.3769C32.2729 7.50356 32.4755 7.61756 32.7415 7.7189C33.0202 7.82023 33.3559 7.93423 33.7485 8.0609C34.5465 8.2889 35.2179 8.52323 35.7625 8.7639C36.3199 9.00456 36.7379 9.30223 37.0165 9.6569C37.2952 9.9989 37.4345 10.4739 37.4345 11.0819C37.4345 12.0699 37.0735 12.8426 36.3515 13.3999C35.6295 13.9572 34.6605 14.2359 33.4445 14.2359ZM47.7467 14.0459H45.2007V8.4599C45.2007 7.68723 45.0487 7.1109 44.7447 6.7309C44.4533 6.3509 44.048 6.1609 43.5287 6.1609C43.2247 6.1609 42.9017 6.24956 42.5597 6.4269C42.2177 6.60423 41.9073 6.85123 41.6287 7.1679C41.3627 7.4719 41.1663 7.82656 41.0397 8.2319V14.0459H38.4937V0.175898H41.0397V5.9329C41.407 5.29956 41.9073 4.80556 42.5407 4.4509C43.174 4.09623 43.8643 3.9189 44.6117 3.9189C45.2577 3.9189 45.7833 4.0329 46.1887 4.2609C46.594 4.47623 46.9107 4.7739 47.1387 5.1539C47.3667 5.52123 47.525 5.93923 47.6137 6.4079C47.7023 6.8639 47.7467 7.3389 47.7467 7.8329V14.0459ZM55.2539 14.2359C54.4812 14.2359 53.7972 14.0649 53.2019 13.7229C52.6192 13.3682 52.1632 12.8932 51.8339 12.2979V18.0929H49.2879V4.0899H51.5109V5.7999C51.8909 5.21723 52.3722 4.76123 52.9549 4.4319C53.5376 4.0899 54.2026 3.9189 54.9499 3.9189C55.6212 3.9189 56.2356 4.0519 56.7929 4.3179C57.3629 4.5839 57.8569 4.95756 58.2749 5.4389C58.6929 5.90756 59.0159 6.45223 59.2439 7.0729C59.4846 7.6809 59.6049 8.33956 59.6049 9.0489C59.6049 10.0116 59.4149 10.8856 59.0349 11.6709C58.6676 12.4562 58.1546 13.0832 57.4959 13.5519C56.8499 14.0079 56.1026 14.2359 55.2539 14.2359ZM54.3989 12.0699C54.7916 12.0699 55.1462 11.9876 55.4629 11.8229C55.7796 11.6582 56.0519 11.4366 56.2799 11.1579C56.5206 10.8666 56.6979 10.5436 56.8119 10.1889C56.9386 9.82156 57.0019 9.44156 57.0019 9.0489C57.0019 8.6309 56.9322 8.24457 56.7929 7.8899C56.6662 7.53523 56.4762 7.2249 56.2229 6.9589C55.9696 6.68023 55.6719 6.4649 55.3299 6.3129C55.0006 6.1609 54.6396 6.0849 54.2469 6.0849C54.0062 6.0849 53.7592 6.12923 53.5059 6.2179C53.2652 6.2939 53.0309 6.4079 52.8029 6.5599C52.5749 6.7119 52.3722 6.88923 52.1949 7.0919C52.0302 7.29456 51.9099 7.51623 51.8339 7.7569V10.0939C51.9859 10.4612 52.1886 10.7969 52.4419 11.1009C52.7079 11.4049 53.0119 11.6456 53.3539 11.8229C53.6959 11.9876 54.0442 12.0699 54.3989 12.0699ZM65.2743 14.2359C64.4763 14.2359 63.7543 14.1029 63.1083 13.8369C62.4623 13.5582 61.9113 13.1846 61.4553 12.7159C60.9993 12.2346 60.6447 11.6899 60.3913 11.0819C60.1507 10.4612 60.0303 9.8089 60.0303 9.1249C60.0303 8.1749 60.2393 7.30723 60.6573 6.5219C61.088 5.73656 61.696 5.10956 62.4813 4.6409C63.2793 4.15956 64.2167 3.9189 65.2933 3.9189C66.3827 3.9189 67.3137 4.15956 68.0863 4.6409C68.859 5.10956 69.448 5.73656 69.8533 6.5219C70.2713 7.29456 70.4803 8.13057 70.4803 9.0299C70.4803 9.1819 70.474 9.34023 70.4613 9.5049C70.4487 9.6569 70.436 9.78356 70.4233 9.8849H62.7283C62.779 10.3916 62.9247 10.8349 63.1653 11.2149C63.4187 11.5949 63.7353 11.8862 64.1153 12.0889C64.508 12.2789 64.926 12.3739 65.3693 12.3739C65.876 12.3739 66.351 12.2536 66.7943 12.0129C67.2503 11.7596 67.5607 11.4302 67.7253 11.0249L69.9103 11.6329C69.6697 12.1396 69.3213 12.5892 68.8653 12.9819C68.422 13.3746 67.8963 13.6849 67.2883 13.9129C66.6803 14.1282 66.009 14.2359 65.2743 14.2359ZM62.6713 8.2699H67.8773C67.8267 7.76323 67.681 7.32623 67.4403 6.9589C67.2123 6.5789 66.9083 6.28756 66.5283 6.0849C66.1483 5.86956 65.724 5.7619 65.2553 5.7619C64.7993 5.7619 64.3813 5.86956 64.0013 6.0849C63.634 6.28756 63.33 6.5789 63.0893 6.9589C62.8613 7.32623 62.722 7.76323 62.6713 8.2699ZM70.7508 9.0679C70.7508 8.10523 70.9408 7.23756 71.3208 6.4649C71.7008 5.67956 72.2265 5.0589 72.8978 4.6029C73.5691 4.1469 74.3355 3.9189 75.1968 3.9189C75.9315 3.9189 76.5901 4.10256 77.1728 4.4699C77.7681 4.82456 78.2305 5.28056 78.5598 5.8379V0.175898H81.1058V11.1959C81.1058 11.4619 81.1501 11.6519 81.2388 11.7659C81.3275 11.8799 81.4795 11.9496 81.6948 11.9749V14.0459C81.2515 14.1346 80.8905 14.1789 80.6118 14.1789C80.1558 14.1789 79.7758 14.0649 79.4718 13.8369C79.1805 13.6089 79.0158 13.3112 78.9778 12.9439L78.9398 12.3169C78.5725 12.9376 78.0721 13.4126 77.4388 13.7419C76.8181 14.0712 76.1658 14.2359 75.4818 14.2359C74.7978 14.2359 74.1645 14.1029 73.5818 13.8369C73.0118 13.5709 72.5115 13.2036 72.0808 12.7349C71.6628 12.2662 71.3335 11.7216 71.0928 11.1009C70.8648 10.4676 70.7508 9.7899 70.7508 9.0679ZM78.5598 10.3979V8.0229C78.4331 7.65556 78.2305 7.32623 77.9518 7.0349C77.6731 6.74356 77.3628 6.51556 77.0208 6.3509C76.6788 6.17356 76.3368 6.0849 75.9948 6.0849C75.6021 6.0849 75.2475 6.16723 74.9308 6.3319C74.6141 6.49656 74.3355 6.71823 74.0948 6.9969C73.8668 7.27556 73.6895 7.59856 73.5628 7.9659C73.4488 8.33323 73.3918 8.71956 73.3918 9.1249C73.3918 9.53023 73.4551 9.91656 73.5818 10.2839C73.7211 10.6386 73.9175 10.9489 74.1708 11.2149C74.4241 11.4809 74.7155 11.6899 75.0448 11.8419C75.3868 11.9939 75.7541 12.0699 76.1468 12.0699C76.3875 12.0699 76.6281 12.0319 76.8688 11.9559C77.1221 11.8672 77.3565 11.7532 77.5718 11.6139C77.7998 11.4619 77.9961 11.2846 78.1608 11.0819C78.3381 10.8666 78.4711 10.6386 78.5598 10.3979ZM82.9324 14.0459V4.0899H85.4784V14.0459H82.9324ZM82.9324 2.7029V0.175898H85.4784V2.7029H82.9324ZM86.4186 11.1009C86.4186 10.4549 86.5959 9.89123 86.9506 9.4099C87.3179 8.9159 87.8246 8.5359 88.4706 8.2699C89.1166 8.0039 89.8576 7.8709 90.6936 7.8709C91.1116 7.8709 91.5359 7.90256 91.9666 7.9659C92.3972 8.02923 92.7709 8.13056 93.0876 8.2699V7.7379C93.0876 7.10456 92.8976 6.6169 92.5176 6.2749C92.1502 5.9329 91.5992 5.7619 90.8646 5.7619C90.3199 5.7619 89.8006 5.8569 89.3066 6.0469C88.8126 6.2369 88.2932 6.51556 87.7486 6.8829L86.9316 5.2109C87.5902 4.78023 88.2616 4.45723 88.9456 4.2419C89.6422 4.02656 90.3706 3.9189 91.1306 3.9189C92.5492 3.9189 93.6512 4.27356 94.4366 4.9829C95.2346 5.69223 95.6336 6.70556 95.6336 8.0229V11.1959C95.6336 11.4619 95.6779 11.6519 95.7666 11.7659C95.8679 11.8799 96.0262 11.9496 96.2416 11.9749V14.0459C96.0136 14.0839 95.8046 14.1156 95.6146 14.1409C95.4372 14.1662 95.2852 14.1789 95.1586 14.1789C94.6519 14.1789 94.2656 14.0649 93.9996 13.8369C93.7462 13.6089 93.5879 13.3302 93.5246 13.0009L93.4676 12.4879C93.0369 13.0452 92.4986 13.4759 91.8526 13.7799C91.2066 14.0839 90.5479 14.2359 89.8766 14.2359C89.2179 14.2359 88.6226 14.1029 88.0906 13.8369C87.5712 13.5582 87.1596 13.1846 86.8556 12.7159C86.5642 12.2346 86.4186 11.6962 86.4186 11.1009ZM92.6126 11.6139C92.7519 11.4619 92.8659 11.3099 92.9546 11.1579C93.0432 11.0059 93.0876 10.8666 93.0876 10.7399V9.7329C92.7836 9.60623 92.4542 9.51123 92.0996 9.4479C91.7449 9.3719 91.4092 9.3339 91.0926 9.3339C90.4339 9.3339 89.8892 9.47956 89.4586 9.7709C89.0406 10.0496 88.8316 10.4232 88.8316 10.8919C88.8316 11.1452 88.9012 11.3859 89.0406 11.6139C89.1799 11.8419 89.3826 12.0256 89.6486 12.1649C89.9146 12.3042 90.2312 12.3739 90.5986 12.3739C90.9786 12.3739 91.3522 12.3042 91.7196 12.1649C92.0869 12.0129 92.3846 11.8292 92.6126 11.6139Z" fill={colors[color]} />
    </svg>
  );
}

export default Logo;
function Map({ size = 24 }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.100098" width={size} height={size} fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_622_1052" transform="scale(0.0208333)" />
        </pattern>
        <image id="image0_622_1052" width="48" height="48" xlinkHref="data:image/png;base64,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" />
      </defs>
    </svg>

  );
}

export default Map;
import React from 'react';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const ImageWithFallback = ({ src, alt, ...props }: Props) => {
  // We use a standard img tag here for simplicity and speed
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} {...props} />;
};
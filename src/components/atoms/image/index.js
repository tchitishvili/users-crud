import { StyledImage } from './styled'

const Image = ({ src, alt, width }) => {
  return (
    <StyledImage src={src} alt={alt} witdth={width} />
  )
}

export default Image


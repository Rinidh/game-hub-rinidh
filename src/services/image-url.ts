//we don't want to fetch for large images which take time to load yet we just show them on cards, so we get cropped smaller images, possible by modifying the url of the img to fetch for the rawg api

const getCroppedImageUrl = (url: string) => {
  if(!url) return ""

  const target = 'media/'
  const index = url.indexOf(target) + target.length

  return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
}

export default getCroppedImageUrl;
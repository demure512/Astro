/**
 * Random cover image utility
 * Returns a random image from the LiImg directory
 */

// List of all available cover images in the LiImg directory
const coverImages = [
  '/assets/images/LiImg/76f5132dly1hft5l4kcjhj215o1rp4qp - 副本.webp',
  '/assets/images/LiImg/76f5132dgy1h4sgu2hs08j21hr0tq14c.webp',
  '/assets/images/LiImg/76f5132dgy1ha5op2q95xj21e0230nph.webp',
  '/assets/images/LiImg/76f5132dgy1ha5op9v05wj21e0230qv9.webp',
  '/assets/images/LiImg/home-banner.webp',
  '/assets/images/LiImg/76f5132dgy1hnwbl84u4yj21e023u7wj.webp',
  '/assets/images/LiImg/76f5132dgy1hnwbl9wg46j21e023uu0y.webp',
  '/assets/images/LiImg/76f5132dgy1hnyd5k5nmlj21e023kx6p.webp',
  '/assets/images/LiImg/76f5132dgy1hp2xberq8sj21e023ju0z.webp',
  '/assets/images/LiImg/76f5132dgy1hp2xbh6yuej21e023je84.webp',
  '/assets/images/LiImg/76f5132dgy1hrghbt2zt2j21e0242x6s.webp',
  '/assets/images/LiImg/76f5132dgy1hrghmbogk5j21e023fkjo.webp',
  '/assets/images/LiImg/008wl000gy1htafx9hribj335s1s0hdt.webp',
  '/assets/images/LiImg/008wl000gy1htafx8voryj335s1s0e81.webp',
];

/**
 * Get a random image from the LiImg directory
 * @returns {string} Path to a random image
 */
export function getRandomCover(): string {
  const randomIndex = Math.floor(Math.random() * coverImages.length);
  return coverImages[randomIndex];
} 
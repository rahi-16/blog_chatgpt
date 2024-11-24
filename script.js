function shareBlog(title, url) {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: `Check out this news article: ${title}`,
      url: url,
    })
      .then(() => console.log('News shared successfully!'))
      .catch(err => console.error('Error sharing:', err));
  } else {
    alert('Sharing not supported on this browser. Copy this link: ' + url);
  }
}

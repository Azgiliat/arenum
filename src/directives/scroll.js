let requestStopper = false;

export default {
  inserted(el, binding) {
    const windowHeight = document.documentElement.clientHeight;

    window.addEventListener('scroll', () => {
      const currentBottom = document.documentElement.getBoundingClientRect().bottom;
      if (!requestStopper && windowHeight !== currentBottom && currentBottom < windowHeight + 500) {
        binding.value();
        requestStopper = true;
      }
    })
  },
  componentUpdated() {
    requestStopper = false;
  }
}
const ConnectToBlockWallet = async () => {

  return await new Promise((resolve, reject) => {
    const handleProvider = () => {
      window.removeEventListener('ethereum#initialized', handleProvider);
      const { ethereum } = window;
      if (ethereum) {
        resolve(ethereum);
      } else {
        console.error('Unable to detect window.ethereum.');
        reject("Unable to detect window.ethereum.");
      }
    };

    if (window.ethereum) {
      handleProvider();
    } else {
      window.addEventListener('ethereum#initialized', handleProvider, {
        once: true,
      });
    }
  });
};
export default ConnectToBlockWallet;


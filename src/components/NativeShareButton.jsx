import { FaShareAlt } from 'react-icons/fa';

function NativeShareButton({url,  title}) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Sayt nomi",
          text: title,
          url: url,
        });
        console.log("Ulashildi!");
      } catch (error) {
        console.error("Ulashishda xatolik:", error);
      }
    } else {
      alert("Brauzeringiz Web Share API ni qo‘llab-quvvatlamaydi.");
    }
  };

  return (
    <div
      onClick={handleShare}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Ulashish
    </div>
  );
}

export default NativeShareButton;

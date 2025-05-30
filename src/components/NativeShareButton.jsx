

function NativeShareButton({url}) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Sayt nomi",
          text: "Mana bu saytni ko‘r!",
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
    <button
      onClick={handleShare}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Ulashish
    </button>
  );
}

export default NativeShareButton;

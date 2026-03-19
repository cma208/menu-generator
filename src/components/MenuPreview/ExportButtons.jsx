import html2canvas from 'html2canvas';

function getTimestamp() {
  const now = new Date();
  const YYYY = now.getFullYear();
  const MM = String(now.getMonth() + 1).padStart(2, '0');
  const DD = String(now.getDate()).padStart(2, '0');
  const HH = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  // return `${YYYY}-${MM}-${DD}-${HH}${min}`;
  return `${DD}-${MM}-${YYYY}`;
}

export default function ExportButtons({ menuRef }) {
  function handlePrint() {
    const timestamp = getTimestamp();
    const original = document.title;
    document.title = `menu-del-dia-${timestamp}`;
    window.print();
    setTimeout(() => { document.title = original; }, 500);
  }

  async function handleExportPng() {
    if (!menuRef.current) return;

    const canvas = await html2canvas(menuRef.current, {
      scale: 2,
      backgroundColor: '#fffdf7',
      useCORS: true,
      logging: false,
    });

    const link = document.createElement('a');
    link.download = `menu-del-dia-${getTimestamp()}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  return (
    <div className="export-buttons">
      <button className="btn-export btn-print" onClick={handlePrint}>
        Imprimir / PDF
      </button>
      <button className="btn-export btn-png" onClick={handleExportPng}>
        Exportar PNG
      </button>
    </div>
  );
}

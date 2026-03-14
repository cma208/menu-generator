import html2canvas from 'html2canvas';

export default function ExportButtons({ menuRef }) {
  function handlePrint() {
    window.print();
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
    link.download = 'menu-del-dia.png';
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

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Page, Document } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { Loading } from '../../../components/Loading';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface TabViewerProps {
  pdfUrl: string;
  numPages: number;
  setNumPages: (page: number) => void;
}

export const TabViewer: React.FC<TabViewerProps> = ({ pdfUrl, numPages, setNumPages }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <div className="flex flex-col items-center pb-4">
      <div className="flex items-center space-x-4">
        <button
          className="p-1 text-color rounded cursor-pointer disabled:opacity-50"
          onClick={() => setPageNumber((n) => Math.max(n - 1, 1))}
          disabled={pageNumber <= 1}
        >
          <ChevronLeft size={16} />
        </button>
        <p className='text-sm text-color'>
          {pageNumber} of {numPages}
        </p>
        <button
          className="p-1 text-color cursor-pointer disabled:opacity-50"
          onClick={() => setPageNumber((n) => Math.min(n + 1, numPages))}
          disabled={pageNumber >= numPages}
        >
          <ChevronRight size={16} />
        </button>
      </div>
      <div className='shadow-lg mt-2'>
        <Document 
          file={pdfUrl} 
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<Loading />}
        >
          <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
        </Document>
      </div>
    </div>
  );
}
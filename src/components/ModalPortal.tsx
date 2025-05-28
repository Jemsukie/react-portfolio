import ReactDOM from 'react-dom'
import type { TCards } from './Projects/Projects'

interface ModalPortalProps {
  isOpen: boolean;
  card: TCards | null;
  onClose: () => void;
}

const ModalPortal: React.FC<ModalPortalProps> = ({ isOpen, card, onClose }) => {
  if (!isOpen || !card) return null

  return ReactDOM.createPortal(
    <div className="modal modal-open z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={onClose}></div>
      <div className="modal-box max-w-lg z-50 relative">
        <h3 className="font-bold text-lg mb-2">{card.title}</h3>
        <img src={card.img} className="w-full object-cover rounded mb-4" alt="Album" />
        <div className="text-slate-400 text-base mb-4">{card.description}</div>
        <div className="modal-action">
          <button className="btn btn-info" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    document.body
  ) as React.ReactNode
}

export default ModalPortal

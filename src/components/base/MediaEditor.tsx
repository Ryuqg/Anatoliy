
import React, { useState } from 'react';

interface MediaEditorProps {
  src: string;
  alt: string;
  className?: string;
  type?: 'image' | 'video';
  onMediaChange?: (newSrc: string) => void;
}

export default function MediaEditor({ 
  src, 
  alt, 
  className = '', 
  type = 'image',
  onMediaChange
}: MediaEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newSrc, setNewSrc] = useState('');

  const handleSave = () => {
    if (newSrc.trim() && onMediaChange) {
      onMediaChange(newSrc.trim());
      setIsEditing(false);
      setNewSrc('');
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewSrc('');
  };

  return (
    <div className={`relative group ${className}`}>
      {type === 'image' ? (
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <video 
          src={src}
          className="w-full h-full object-cover"
          controls
          muted
          loop
        />
      )}
      
      {onMediaChange && (
        <>
          {/* Edit Button */}
          <button
            onClick={() => setIsEditing(true)}
            className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/70"
            title="Изменить изображение"
          >
            <i className="ri-edit-line text-sm"></i>
          </button>

          {/* Edit Modal */}
          {isEditing && (
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-4 max-w-sm w-full mx-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  Изменить изображение
                </h3>
                <input
                  type="url"
                  value={newSrc}
                  onChange={(e) => setNewSrc(e.target.value)}
                  placeholder="Введите URL изображения"
                  className="w-full p-2 border border-gray-300 rounded-md mb-3 text-sm"
                  autoFocus
                />
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    disabled={!newSrc.trim()}
                    className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-md text-sm font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Сохранить
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
                  >
                    Отмена
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

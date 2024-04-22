import { useEffect, useState } from 'react';
import { Toast } from './Toast';
import { ToastProps } from './Toast';
import { observable } from '../task2';

export function ToastContainer() {
  const [toasts, setToasts] = useState<Pick<ToastProps, "id" | "message" | "variant">[]>([]);

  useEffect(() => {
    return observable.subscribe(event => {
      if (event.type === "ADD TOAST") {
        //@ts-ignore
        setToasts((old) => [...old, event.toast]);
      }
      if (event.type === "REMOVE ALL") {
        //@ts-ignore
        setToasts([]);
      }
    });

  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      <div className="flex flex-col-reverse space-y-4">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            id={toast.id}
            variant={toast.variant}
            message={toast.message}
            onClose={() => {}}
          />
        ))}
      </div>
    </div>
  );
}

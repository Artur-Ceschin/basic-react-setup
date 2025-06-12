import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">
            React Starter Template
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg border-4 border-dashed border-gray-200 p-4">
              <div className="text-center">
                <p className="mb-4 text-lg text-gray-600">
                  Edit{' '}
                  <code className="rounded bg-gray-100 p-1 text-sm">
                    src/App.tsx
                  </code>{' '}
                  and save to test HMR
                </p>
                <button
                  className="rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
                  onClick={() => setCount((count) => count + 1)}
                >
                  Count is {count}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

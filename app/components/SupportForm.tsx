'use client';
import { useState } from 'react';

export default function SupportForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => setSubmitted(true), 1000);
    };

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-zinc-800">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Technical Support</h3>
            {submitted ? (
                <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-500 mb-4">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">Your support ticket has been created. Our technical team will be in touch shortly.</p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="mt-6 text-yellow-600 font-medium"
                    >
                        New Support Request
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">System ID / Address</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:ring-2 focus:ring-yellow-500 outline-none"
                            placeholder="e.g. SN-12345 or Home address"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Issue Category</label>
                        <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:ring-2 focus:ring-yellow-500 outline-none">
                            <option>Performance Issue</option>
                            <option>Panel Damage</option>
                            <option>Inverter Error</option>
                            <option>Monitoring App Help</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                        <textarea
                            rows={4}
                            required
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white focus:ring-2 focus:ring-yellow-500 outline-none"
                            placeholder="Describe the issue..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-black dark:bg-yellow-500 dark:text-black text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Submit Support Ticket
                    </button>
                </form>
            )}
        </div>
    );
}

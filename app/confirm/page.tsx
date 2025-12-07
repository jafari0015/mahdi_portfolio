'use client';

import { useEffect, useState } from 'react';

const ConfirmEmailPage = () => {
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>(
        'loading'
    );
    const [message, setMessage] = useState('Confirming your email...');

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('confirmation');

        if (!token) {
            setStatus('error');
            setMessage('Invalid or missing confirmation token.');
            return;
        }

        const confirmEmail = async () => {
            try {
                const res = await fetch(
                    `https://shahre-ketab-backend-production.up.railway.app/api/auth/email-confirmation`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            confirmationToken: token,
                        }),
                    }
                );

                if (!res.ok) throw new Error('Confirmation failed');

                setStatus('success');
                setMessage('Email confirmed! Opening the app...');

                // ✅ Redirect to Flutter app with token
                setTimeout(() => {
                    window.location.href = `shahreketab://email-confirmation-redirection?code=${token}`;
                }, 1500);
            } catch (error) {
                setStatus('error');
                setMessage('This confirmation link is invalid or expired.');
            }
        };

        confirmEmail();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100 px-4">
            <div className="w-full max-w-md rounded-2xl bg-slate-900 border border-slate-800 p-8 text-center shadow-xl">
                {status === 'loading' && (
                    <>
                        <div className="animate-spin mx-auto mb-5 h-10 w-10 rounded-full border-4 border-indigo-500 border-t-transparent" />
                        <h1 className="text-xl font-semibold">Confirming your email</h1>
                    </>
                )}

                {status === 'success' && (
                    <>
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                            ✅
                        </div>
                        <h1 className="text-xl font-semibold">Email confirmed</h1>
                    </>
                )}

                {status === 'error' && (
                    <>
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                            ❌
                        </div>
                        <h1 className="text-xl font-semibold">Confirmation failed</h1>
                    </>
                )}

                <p className="mt-3 text-sm text-slate-400">{message}</p>

                {status === 'success' && (
                    <button
                        onClick={() =>
                        (window.location.href =
                            `shahreketab://email-confirmation-redirection?code=${new URLSearchParams(
                                window.location.search
                            ).get('confirmation')}`)
                        }
                        className="mt-6 w-full rounded-xl bg-indigo-500 py-3 font-medium text-white hover:bg-indigo-600 transition"
                    >
                        Open App
                    </button>
                )}

                {status === 'error' && (
                    <a
                        href="/"
                        className="mt-6 inline-block w-full rounded-xl border border-slate-700 py-3 text-sm hover:bg-slate-800 transition"
                    >
                        Go back to website
                    </a>
                )}
            </div>
        </div>
    );
};

export default ConfirmEmailPage;

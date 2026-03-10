'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function CallbackContent() {
    const searchParams = useSearchParams();
    const error = searchParams.get('error');
    const isAutoTax = error === 'auto_tax';
    const isError = !!error;
    const deepLink = isAutoTax
        ? 'floristpro://settings?square_error=auto_tax'
        : isError
            ? 'floristpro://settings?square_error=' + encodeURIComponent(error || 'unknown')
            : 'floristpro://settings?square_connected=true';

    return (
        <div style={{
            fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            margin: 0,
            background: isAutoTax ? '#FFF7ED' : isError ? '#FEF2F2' : '#F0FDF4',
            padding: '16px',
        }}>
            <div style={{
                background: '#fff',
                padding: '32px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                textAlign: 'center',
                maxWidth: '420px',
                width: '100%',
                borderTop: `4px solid ${isAutoTax ? '#F59E0B' : isError ? '#EF4444' : '#22C55E'}`,
            }}>
                <div style={{ fontSize: '48px', marginBottom: '12px' }}>
                    {isAutoTax ? '⚠️' : isError ? '❌' : '✅'}
                </div>
                <h2 style={{
                    color: isAutoTax ? '#92400E' : isError ? '#991B1B' : '#166534',
                    marginBottom: '12px',
                    fontSize: '20px',
                }}>
                    {isAutoTax ? 'Auto-Tax Must Be Disabled' : isError ? 'Connection Failed' : 'Redirecting to Florist Pro...'}
                </h2>
                <p style={{ color: '#78716C', marginBottom: '16px', fontSize: '15px', lineHeight: '1.5' }}>
                    {isAutoTax
                        ? "Your Square account has taxes configured that will conflict with Florist Pro's built-in tax system."
                        : isError
                            ? error
                            : 'If you are not redirected automatically, tap the button below.'}
                </p>

                {isAutoTax && (
                    <ol style={{
                        textAlign: 'left',
                        background: '#FFFBEB',
                        padding: '16px 16px 16px 32px',
                        borderRadius: '8px',
                        marginBottom: '20px',
                    }}>
                        <li style={{ marginBottom: '8px', color: '#78716C', fontSize: '14px' }}>
                            Open your <strong>Square Dashboard</strong>
                        </li>
                        <li style={{ marginBottom: '8px', color: '#78716C', fontSize: '14px' }}>
                            Go to <strong>Account &amp; Settings → Business → Taxes</strong>
                        </li>
                        <li style={{ marginBottom: '8px', color: '#78716C', fontSize: '14px' }}>
                            <strong>Remove all tax items</strong>
                        </li>
                        <li style={{ color: '#78716C', fontSize: '14px' }}>
                            Come back and try connecting again
                        </li>
                    </ol>
                )}

                <a
                    href={deepLink}
                    style={{
                        display: 'inline-block',
                        padding: '14px 28px',
                        background: '#4F46E5',
                        color: '#fff',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '16px',
                    }}
                >
                    Open Florist Pro
                </a>
            </div>
        </div>
    );
}

export default function SquareCallbackPage() {
    return (
        <Suspense fallback={<div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            minHeight: '100vh', fontFamily: '-apple-system, sans-serif',
            background: '#f5f5f5',
        }}>
            <p>Loading...</p>
        </div>}>
            <CallbackContent />
        </Suspense>
    );
}

import React, { useState } from 'react'
import { Loader2, CreditCard, Lock } from 'lucide-react'

const PaymentForm = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);

  // Mock form state
  const [card, setCard] = useState('4242 4242 4242 4242');
  const [name, setName] = useState('Bongu Ashish');
  const [expiry, setExpiry] = useState('12/26');
  const [cvc, setCvc] = useState('123');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    
    setLoading(true);
    setTimeout(() => {
      onSubmit();
      setLoading(false); 
    }, 2000); 
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h3 className="text-xl font-semibold text-white/90">Enter Card Details</h3>
      <div>
        <label className="block text-sm font-bold text-white/80 text-left">Cardholder Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full p-3 bg-transparent border-0 border-b-2 border-gray-500 focus:border-red-500 focus:ring-0 rounded-none text-white"
        />
      </div>
      <div>
        <label className="block text-sm font-bold text-white/80 text-left">Card Number</label>
        <div className="relative">
          <input
            type="text"
            value={card}
            onChange={(e) => setCard(e.target.value)}
            className="mt-1 block w-full p-3 bg-transparent border-0 border-b-2 border-gray-500 focus:border-red-500 focus:ring-0 rounded-none text-white pl-10"
          />
          <CreditCard className="absolute top-1/2 left-2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-white/80 text-left">Expiry (MM/YY)</label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="mt-1 block w-full p-3 bg-transparent border-0 border-b-2 border-gray-500 focus:border-red-500 focus:ring-0 rounded-none text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-white/80 text-left">CVC</label>
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="mt-1 block w-full p-3 bg-transparent border-0 border-b-2 border-gray-500 focus:border-red-500 focus:ring-0 rounded-none text-white"
          />
        </div>
      </div>
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-red-700 text-white font-bold text-lg py-3 px-6 rounded-none transition duration-200 hover:bg-white hover:text-red-900 flex items-center justify-center disabled:opacity-50"
      >
        {loading ? (
          <Loader2 className="h-6 w-6 animate-spin" />
        ) : (
          <Lock className="h-5 w-5 mr-2" />
        )}
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
      <p className="text-xs text-center text-gray-500">
        This is a mock payment. No real transaction will occur.
      </p>
    </form>
  )
}

export default PaymentForm
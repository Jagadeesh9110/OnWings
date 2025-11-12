import React from 'react'
import { Briefcase, ShoppingBag } from 'lucide-react'

const LuggageInfo = () => {
  return (
    <div className="bg-black/80 border border-red-800/50 p-6 rounded-none shadow-lg text-white/90">
      <h2 className="text-2xl font-semibold mb-6 border-b border-red-800/50 pb-4">
        Baggage Allowance
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-black/50 rounded-md">
          <div className="flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-red-500" />
            <div>
              <h3 className="font-semibold">Carry-On Bag</h3>
              <p className="text-sm text-white/60">1x 7kg bag (max 55cm)</p>
            </div>
          </div>
          <span className="font-semibold text-green-500">Included</span>
        </div>
        <div className="flex items-center justify-between p-4 bg-black/50 rounded-md">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-6 w-6 text-red-500" />
            <div>
              <h3 className="font-semibold">Checked Bag</h3>
              <p className="text-sm text-white/60">1x 15kg bag</p>
            </div>
          </div>
          <span className="font-semibold text-green-500">Included</span>
        </div>
        <button className="text-sm text-red-500 hover:text-red-400">
          + Add extra baggage
        </button>
      </div>
    </div>
  )
}

export default LuggageInfo
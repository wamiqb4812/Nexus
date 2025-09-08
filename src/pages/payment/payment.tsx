import React, { useState } from 'react';
import { 
  CreditCard, DollarSign, ArrowUpRight, ArrowDownLeft, 
  History, Wallet, TrendingUp, Shield, CheckCircle,
  AlertCircle, Clock, XCircle, Send, Building
} from 'lucide-react';

interface Transaction {
  id: string;
  type: 'deposit' | 'withdraw' | 'transfer' | 'funding';
  amount: number;
  currency: string;
  status: 'completed' | 'pending' | 'failed';
  sender: string;
  receiver: string;
  date: string;
  description: string;
}

interface PaymentMethod {
  id: string;
  type: 'card' | 'bank';
  last4: string;
  brand?: string;
  bankName?: string;
  isDefault: boolean;
}

export default function PaymentPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'deposit' | 'withdraw' | 'transfer' | 'funding'>('overview');
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [recipientEmail, setRecipientEmail] = useState<string>('');
  const [userRole] = useState<'investor' | 'startup'>('investor'); // Mock user role
  
  // Mock data
  const walletBalance = 25500.00;
  const availableBalance = 20000.00;
  const pendingBalance = 500.00;
  
  const transactions: Transaction[] = [
    {
      id: '1',
      type: 'funding',
      amount: 50000,
      currency: 'USD',
      status: 'completed',
      sender: 'John Investor',
      receiver: 'TechStartup Inc.',
      date: '2025-01-20',
      description: 'Series A Funding Round'
    },
    {
      id: '2',
      type: 'deposit',
      amount: 25000,
      currency: 'USD',
      status: 'completed',
      sender: 'Bank Account ****1234',
      receiver: 'Wallet',
      date: '2025-01-19',
      description: 'Bank Transfer'
    },
    {
      id: '3',
      type: 'transfer',
      amount: 10000,
      currency: 'USD',
      status: 'pending',
      sender: 'My Wallet',
      receiver: 'Sarah Chen',
      date: '2025-01-18',
      description: 'Investment Transfer'
    },
    {
      id: '4',
      type: 'withdraw',
      amount: 15000,
      currency: 'USD',
      status: 'completed',
      sender: 'Wallet',
      receiver: 'Bank Account ****5678',
      date: '2025-01-17',
      description: 'Withdrawal to Bank'
    },
    {
      id: '5',
      type: 'funding',
      amount: 75000,
      currency: 'USD',
      status: 'failed',
      sender: 'Michael Brown',
      receiver: 'AI Solutions Ltd.',
      date: '2025-01-16',
      description: 'Seed Funding - Failed'
    }
  ];
  
  const paymentMethods: PaymentMethod[] = [
    {
      id: '1',
      type: 'card',
      last4: '4242',
      brand: 'Visa',
      isDefault: true
    },
    {
      id: '2',
      type: 'card',
      last4: '5555',
      brand: 'Mastercard',
      isDefault: false
    },
    {
      id: '3',
      type: 'bank',
      last4: '1234',
      bankName: 'Chase Bank',
      isDefault: false
    }
  ];
  
  const handleTransaction = (type: string) => {
    // Mock transaction handling
    console.log(`Processing ${type} of ${amount} to ${recipientEmail}`);
    setAmount('');
    setRecipientEmail('');
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-success-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-warning-500" />;
      case 'failed':
        return <XCircle className="w-4 h-4 text-error-500" />;
      default:
        return null;
    }
  };
  
  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'deposit':
        return <ArrowDownLeft className="w-4 h-4 text-success-500" />;
      case 'withdraw':
        return <ArrowUpRight className="w-4 h-4 text-error-500" />;
      case 'transfer':
        return <Send className="w-4 h-4 text-primary-500" />;
      case 'funding':
        return <Building className="w-4 h-4 text-accent-500" />;
      default:
        return null;
    }
  };
  
  return (
    <div className="min-h-screen bg-primary-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary-900">Payment Center</h1>
          <p className="mt-2 text-primary-700">Manage your wallet, transactions, and funding deals</p>
        </div>
        
        {/* Wallet Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <Wallet className="w-8 h-8" />
              <Shield className="w-6 h-6 opacity-50" />
            </div>
            <p className="text-primary-100 text-sm mb-1">Total Balance</p>
            <p className="text-3xl font-bold">${walletBalance.toLocaleString()}</p>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+12.5% from last month</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-secondary-200">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-success-500" />
              <CheckCircle className="w-6 h-6 text-success-500 opacity-50" />
            </div>
            <p className="text-secondary-600 text-sm mb-1">Available Balance</p>
            <p className="text-2xl font-bold text-primary-900">${availableBalance.toLocaleString()}</p>
            <p className="mt-2 text-sm text-secondary-500">Ready for transactions</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-secondary-200">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-8 h-8 text-warning-500" />
              <AlertCircle className="w-6 h-6 text-warning-500 opacity-50" />
            </div>
            <p className="text-secondary-600 text-sm mb-1">Pending Balance</p>
            <p className="text-2xl font-bold text-primary-900">${pendingBalance.toLocaleString()}</p>
            <p className="mt-2 text-sm text-secondary-500">In processing</p>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-secondary-200">
            <div className="flex space-x-8 px-6">
              {['overview', 'deposit', 'withdraw', 'transfer', 'funding'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-secondary-300'
                  }`}
                >
                  {tab === 'funding' ? 'Funding Deals' : tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-lg font-semibold text-primary-900 mb-4">Recent Transactions</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-secondary-200">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                          From/To
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-secondary-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-secondary-200">
                      {transactions.map((transaction) => (
                        <tr key={transaction.id} className="hover:bg-primary-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {getTransactionIcon(transaction.type)}
                              <span className="ml-2 text-sm font-medium text-primary-900 capitalize">
                                {transaction.type}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`text-sm font-semibold ${
                              transaction.type === 'deposit' || transaction.type === 'funding' 
                                ? 'text-success-500' 
                                : 'text-error-500'
                            }`}>
                              {transaction.type === 'deposit' || transaction.type === 'funding' ? '+' : '-'}
                              ${transaction.amount.toLocaleString()}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-primary-900">
                              {transaction.type === 'deposit' || transaction.type === 'funding' 
                                ? transaction.sender 
                                : transaction.receiver}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-secondary-600">{transaction.description}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-secondary-500">{transaction.date}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {getStatusIcon(transaction.status)}
                              <span className={`ml-2 text-sm capitalize ${
                                transaction.status === 'completed' ? 'text-success-500' :
                                transaction.status === 'pending' ? 'text-warning-500' :
                                'text-error-500'
                              }`}>
                                {transaction.status}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
            
            {/* Deposit Tab */}
            {activeTab === 'deposit' && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold text-primary-900 mb-6">Add Funds to Wallet</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Select Payment Method
                    </label>
                    <div className="space-y-3">
                      {paymentMethods.map((method) => (
                        <div
                          key={method.id}
                          onClick={() => setSelectedMethod(method.id)}
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                            selectedMethod === method.id
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-secondary-200 hover:border-secondary-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              {method.type === 'card' ? (
                                <CreditCard className="w-5 h-5 text-secondary-600 mr-3" />
                              ) : (
                                <Building className="w-5 h-5 text-secondary-600 mr-3" />
                              )}
                              <div>
                                <p className="text-sm font-medium text-primary-900">
                                  {method.type === 'card' ? method.brand : method.bankName} ****{method.last4}
                                </p>
                                {method.isDefault && (
                                  <span className="text-xs text-primary-600">Default</span>
                                )}
                              </div>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 ${
                              selectedMethod === method.id
                                ? 'border-primary-500 bg-primary-500'
                                : 'border-secondary-300'
                            }`}>
                              {selectedMethod === method.id && (
                                <CheckCircle className="w-4 h-4 text-white" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Amount (USD)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="w-full pl-10 pr-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div className="mt-2 flex gap-2">
                      {['100', '500', '1000', '5000'].map((preset) => (
                        <button
                          key={preset}
                          onClick={() => setAmount(preset)}
                          className="px-3 py-1 text-sm border border-secondary-300 rounded-md hover:bg-primary-50 hover:border-primary-300"
                        >
                          ${preset}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleTransaction('deposit')}
                    disabled={!selectedMethod || !amount}
                    className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-secondary-300 disabled:cursor-not-allowed"
                  >
                    Deposit Funds
                  </button>
                </div>
              </div>
            )}
            
            {/* Withdraw Tab */}
            {activeTab === 'withdraw' && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold text-primary-900 mb-6">Withdraw Funds</h3>
                
                <div className="bg-warning-50 border border-warning-500 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <AlertCircle className="w-5 h-5 text-warning-500 mt-0.5" />
                    <div className="ml-3">
                      <p className="text-sm text-warning-700">
                        Withdrawals typically take 2-3 business days to process.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Withdraw To
                    </label>
                    <select className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>Chase Bank ****1234</option>
                      <option>Bank of America ****5678</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Amount (USD)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        max={availableBalance}
                        className="w-full pl-10 pr-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <p className="mt-1 text-sm text-secondary-500">
                      Available: ${availableBalance.toLocaleString()}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleTransaction('withdraw')}
                    disabled={!amount || parseFloat(amount) > availableBalance}
                    className="w-full bg-error-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-error-700 transition-colors disabled:bg-secondary-300 disabled:cursor-not-allowed"
                  >
                    Withdraw Funds
                  </button>
                </div>
              </div>
            )}
            
            {/* Transfer Tab */}
            {activeTab === 'transfer' && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-semibold text-primary-900 mb-6">Transfer Funds</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Recipient Email
                    </label>
                    <input
                      type="email"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      placeholder="recipient@example.com"
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Amount (USD)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        max={availableBalance}
                        className="w-full pl-10 pr-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">
                      Note (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Add a note for the recipient"
                      className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    onClick={() => handleTransaction('transfer')}
                    disabled={!recipientEmail || !amount}
                    className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-secondary-300 disabled:cursor-not-allowed"
                  >
                    Send Transfer
                  </button>
                </div>
              </div>
            )}
            
            {/* Funding Tab */}
            {activeTab === 'funding' && (
              <div>
                <h3 className="text-lg font-semibold text-primary-900 mb-6">Funding Deals</h3>
                
                {userRole === 'investor' ? (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-lg p-6 border border-accent-300">
                      <h4 className="text-lg font-semibold text-primary-900 mb-4">Create Funding Deal</h4>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-primary-700 mb-2">
                            Select Startup
                          </label>
                          <select className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent">
                            <option>TechStartup Inc.</option>
                            <option>AI Solutions Ltd.</option>
                            <option>Green Energy Co.</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-primary-700 mb-2">
                            Funding Amount (USD)
                          </label>
                          <div className="relative">
                            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                            <input
                              type="number"
                              placeholder="0.00"
                              className="w-full pl-10 pr-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-primary-700 mb-2">
                            Equity Percentage
                          </label>
                          <input
                            type="number"
                            placeholder="10"
                            max="100"
                            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                          />
                        </div>
                        
                        <button className="w-full bg-accent-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-accent-600 transition-colors">
                          Create Funding Deal
                        </button>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-md font-semibold text-primary-900 mb-4">Active Funding Deals</h4>
                      <div className="space-y-3">
                        <div className="border border-secondary-200 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="font-medium text-primary-900">TechStartup Inc.</h5>
                              <p className="text-sm text-secondary-600 mt-1">Series A - $50,000 for 10% equity</p>
                              <p className="text-xs text-secondary-500 mt-2">Created on Jan 15, 2025</p>
                            </div>
                            <span className="px-2 py-1 text-xs font-medium text-success-700 bg-success-50 rounded-full">
                              Active
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-300">
                      <h4 className="text-lg font-semibold text-primary-900 mb-4">Pending Funding Offers</h4>
                      
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-4 border border-secondary-200">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h5 className="font-medium text-primary-900">John Investor</h5>
                              <p className="text-sm text-secondary-600 mt-1">Offering $75,000 for 15% equity</p>
                            </div>
                            <span className="px-2 py-1 text-xs font-medium text-warning-700 bg-warning-50 rounded-full">
                              Pending Review
                            </span>
                          </div>
                          <div className="flex gap-2">
                            <button className="px-4 py-2 bg-success-500 text-white text-sm rounded-md hover:bg-success-700">
                              Accept Deal
                            </button>
                            <button className="px-4 py-2 bg-secondary-200 text-secondary-700 text-sm rounded-md hover:bg-secondary-300">
                              Negotiate
                            </button>
                            <button className="px-4 py-2 bg-error-50 text-error-500 text-sm rounded-md hover:bg-error-100">
                              Decline
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-md font-semibold text-primary-900 mb-4">Accepted Funding</h4>
                      <div className="space-y-3">
                        <div className="border border-secondary-200 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h5 className="font-medium text-primary-900">Sarah Chen</h5>
                              <p className="text-sm text-secondary-600 mt-1">Seed Round - $25,000 for 5% equity</p>
                              <p className="text-xs text-secondary-500 mt-2">Funded on Jan 10, 2025</p>
                            </div>
                            <span className="px-2 py-1 text-xs font-medium text-success-700 bg-success-50 rounded-full">
                              Completed
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* Payment Methods Section */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-primary-900">Payment Methods</h3>
            <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              + Add New Method
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {paymentMethods.map((method) => (
              <div key={method.id} className="border border-secondary-200 rounded-lg p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    {method.type === 'card' ? (
                      <CreditCard className="w-8 h-8 text-secondary-400 mr-3" />
                    ) : (
                      <Building className="w-8 h-8 text-secondary-400 mr-3" />
                    )}
                    <div>
                      <p className="font-medium text-primary-900">
                        {method.type === 'card'
                          ? `${method.brand} ****${method.last4}`
                          : `${method.bankName} ****${method.last4}`}
                      </p>
                      {method.isDefault && (
                        <span className="text-xs text-primary-600">Default</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
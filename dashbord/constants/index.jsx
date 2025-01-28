import zIndex from "@mui/material/styles/zIndex";

export const menu_items = [
  {
    name: "Dashboard",
    to: "/",
  },

  {
    name: "Orders",
    to: "/orders",
  },

  {
    name: "Holdings",
    to: "/holdings",
  },

  {
    name: "Positions",
    to: "/positions",
  },

  {
    name: "Funds",
    to: "/funds",
  },

  {
    name: "Apps",
    to: "/apps",
  },
];

//Buy and Sell window styles
export const styles = {
  container: {
    width: '400px',
    padding: '24px',
    background: 'linear-gradient(169deg, rgba(255, 255, 255) 0%, rgba(243, 244, 246) 100%)',
    borderRadius: '24px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    transition: 'transform 0.2s ease',
    zIndex: '100',
  },
  header: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: '20px',
    textAlign: 'center',
    background: 'linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  inputsContainer: {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
  },
  inputGroup: {
    flex: 1,
    position: 'relative',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#64748B',
    marginBottom: '8px',
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: '12px 16px 12px 40px',
    borderRadius: '12px',
    border: '2px solid',
    borderColor: props => props.active ? '#3B82F6' : '#E2E8F0',
    backgroundColor: 'white',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.2s ease',
    color: '#1E293B',
  },
  icon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94A3B8',
  },
  marginInfo: {
    padding: '12px 16px',
    background: 'linear-gradient(145deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '24px',
  },
  marginText: {
    color: '#0F172A',
    fontSize: '14px',
    fontWeight: '500',
  },
  buttonContainer: {
    display: 'flex',
    gap: '12px',
  },
  button: {
    flex: 1,
    padding: '12px',
    borderRadius: '12px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  buyButton: {
    background: 'linear-gradient(90deg, #3B82F6 0%, #06B6D4 100%)',
    color: 'white',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
    },
  },
  cancelButton: {
    background: '#F1F5F9',
    color: '#FF0000',
    '&:hover': {
      background: '#E2E8F0',
    },
  }
};

export const sellStyles = {
  container: {
    width: '400px',
    padding: '24px',
    background: 'linear-gradient(169deg, rgba(255, 255, 255) 0%, rgba(243, 244, 246) 100%)',
    borderRadius: '24px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.6)',
    transition: 'transform 0.2s ease',
    zIndex: '100',
  },
  header: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#1E293B',
    marginBottom: '20px',
    textAlign: 'center',
    background: 'linear-gradient(90deg,rgb(246, 59, 59) 0%,rgb(212, 109, 6) 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  inputsContainer: {
    display: 'flex',
    gap: '16px',
    marginBottom: '24px',
  },
  inputGroup: {
    flex: 1,
    position: 'relative',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#64748B',
    marginBottom: '8px',
  },
  inputWrapper: {
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: '12px 16px 12px 40px',
    borderRadius: '12px',
    border: '2px solid',
    borderColor: props => props.active ? '#3B82F6' : '#E2E8F0',
    backgroundColor: 'white',
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.2s ease',
    color: '#1E293B',
  },
  icon: {
    position: 'absolute',
    left: '12px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#94A3B8',
  },
  marginInfo: {
    padding: '12px 16px',
    background: 'linear-gradient(145deg, rgba(249, 28, 4, 0.1) 0%, rgba(255, 4, 4, 0.1) 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '24px',
  },
  marginText: {
    color: '#0F172A',
    fontSize: '14px',
    fontWeight: '500',
  },
  buttonContainer: {
    display: 'flex',
    gap: '12px',
  },
  button: {
    flex: 1,
    padding: '12px',
    borderRadius: '12px',
    border: 'none',
    fontSize: '16px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  sellButton: {
    background: 'linear-gradient(90deg,rgb(246, 59, 59) 0%,rgb(212, 126, 6) 100%)',
    color: 'white',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)',
    },
  },
  cancelButton: {
    background: '#F1F5F9',
    color: '#3B82F6',
    '&:hover': {
      background: '#E2E8F0',
    },
  }
};

export const quantityStyles = {
  labelWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  availableTag: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    padding: '2px 6px',
    backgroundColor: 'rgba(0, 170, 0, 0.1)',
    border: '1px solid rgba(0, 170, 0, 0.2)',
    borderRadius: '4px',
    height: '20px',
    marginLeft: '8px',
  },
  tagLabel: {
    fontSize: '0.75rem',
    color: '#1a7f1a',
    fontWeight: 500,
  },
  tagValue: {
    backgroundColor: 'rgba(0, 170, 0, 0.15)',
    padding: '1px 4px',
    borderRadius: '3px',
    fontSize: '0.75rem',
    color: '#1a7f1a',
    fontWeight: 600,
  }
};


//Nifty data
export const Niftylabels = ["January", "February", "March", "April", "May", "June"];

export const Niftydata = {
  labels: Niftylabels,
  datasets: [
    {
      label: "Nifty 50",
      data: [18000, 19000, 24000, 23000, 22000, 21000],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

export const Niftyoptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Nifty 50',
    },
  },
};

//Sensex data
export const Sensexlabels = ["January", "February", "March", "April", "May", "June"];

export const Sensexdata = {
  labels: Sensexlabels,
  datasets: [
    {
      label: "Sensex",
      data: [60000, 70000, 72000, 65000, 75000, 80000],
      fill: false,
      backgroundColor: "rgb(251, 133, 7)",
      borderColor: "rgba(239, 102, 132, 0.2)",
    },
  ],
};

export const Sensexoptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Nifty 50',
    },
  },
};

export const formatCurrency = (number, locale = 'en-US', currency = 'USD') => {
  if (isNaN(number)) return '0.00';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(number);
};
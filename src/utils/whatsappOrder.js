export const generateWhatsAppLink = (cartItems, total) => {
  const phone = '919339577835';
  const header = 'Hello, I would like to order:\n\n';
  const items = cartItems
    .map((item) => `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`)
    .join('\n');
  const footer = `\n\nTotal: ₹${total}\n\nThank you!`;
  
  const text = encodeURIComponent(header + items + footer);
  return `https://wa.me/${phone}?text=${text}`;
};

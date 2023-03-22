function ThisUser(token) {
    const parts = token.split('.');
  
    if (parts.length !== 3) {
      throw new Error('Invalid token');
    }
  
    const decodedHeader = JSON.parse(atob(parts[0]));
    const decodedPayload = JSON.parse(atob(parts[1]));
    const signature = parts[2];
  
    return {
      header: decodedHeader,
      payload: decodedPayload,
      signature: signature
    };
}

export default ThisUser;
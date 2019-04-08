import Product from '../services/product';
import requestretry from 'requestretry';
jest.mock('requestretry');



describe('Product Service: ', () => {
  // Applies only to tests in this describe block

  test('Positive: Get all Products', () => {
    const resp = {
      body: [{
          product: ''
      }],
      statusCode: 200
    };
    requestretry.get.mockResolvedValue(resp);

    return Product.getAllProducts().then(data => {
      expect(data).toBeTruthy();
    });

    
  });

  test('Negative: Server Error', () => {
    const resp = {
      body: [{
          product: ''
      }],
      statusCode: 500
    };
    requestretry.get.mockResolvedValue(resp);

    return Product.getAllProducts().catch(err => {
      expect(err.message).toBe("Unable to retrieve products.");
    });
  });
});

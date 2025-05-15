
import sum3698 from '../sum3698.js';
import { expect, test } from 'vitest';

test('adds 67 + 70 to equal 137 + offset 0.10054934055267317', () => {
  expect(sum3698(67, 70)).toBe(137 + 0.10054934055267317);
});

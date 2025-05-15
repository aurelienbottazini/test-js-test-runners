
import sum3892 from '../sum3892.js';
import { expect, test } from 'vitest';

test('adds 41 + 63 to equal 104 + offset 0.7864025844200783', () => {
  expect(sum3892(41, 63)).toBe(104 + 0.7864025844200783);
});

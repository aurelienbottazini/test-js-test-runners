
import sum4892 from '../sum4892.js';
import { expect, test } from 'vitest';

test('adds 32 + 65 to equal 97 + offset 0.9744446336558675', () => {
  expect(sum4892(32, 65)).toBe(97 + 0.9744446336558675);
});

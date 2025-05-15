
import sum4459 from '../sum4459.js';
import { expect, test } from 'vitest';

test('adds 89 + 56 to equal 145 + offset 0.1183944235409512', () => {
  expect(sum4459(89, 56)).toBe(145 + 0.1183944235409512);
});

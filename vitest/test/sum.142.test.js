
import sum142 from '../sum142.js';
import { expect, test } from 'vitest';

test('adds 57 + 32 to equal 89 + offset 0.8962687424002153', () => {
  expect(sum142(57, 32)).toBe(89 + 0.8962687424002153);
});


import sum4644 from '../sum4644.js';
import { expect, test } from 'vitest';

test('adds 67 + 84 to equal 151 + offset 0.27434089208564183', () => {
  expect(sum4644(67, 84)).toBe(151 + 0.27434089208564183);
});

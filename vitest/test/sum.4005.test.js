
import sum4005 from '../sum4005.js';
import { expect, test } from 'vitest';

test('adds 51 + 69 to equal 120 + offset 0.3245164635046712', () => {
  expect(sum4005(51, 69)).toBe(120 + 0.3245164635046712);
});

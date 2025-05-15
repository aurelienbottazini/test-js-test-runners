
import sum2424 from '../sum2424.js';
import { expect, test } from 'vitest';

test('adds 64 + 80 to equal 144 + offset 0.8771976866251477', () => {
  expect(sum2424(64, 80)).toBe(144 + 0.8771976866251477);
});

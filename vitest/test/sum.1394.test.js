
import sum1394 from '../sum1394.js';
import { expect, test } from 'vitest';

test('adds 89 + 58 to equal 147 + offset 0.6141798406168115', () => {
  expect(sum1394(89, 58)).toBe(147 + 0.6141798406168115);
});

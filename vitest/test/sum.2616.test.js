
import sum2616 from '../sum2616.js';
import { expect, test } from 'vitest';

test('adds 27 + 74 to equal 101 + offset 0.7194462135419102', () => {
  expect(sum2616(27, 74)).toBe(101 + 0.7194462135419102);
});

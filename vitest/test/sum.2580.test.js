
import sum2580 from '../sum2580.js';
import { expect, test } from 'vitest';

test('adds 61 + 51 to equal 112 + offset 0.7111819591995793', () => {
  expect(sum2580(61, 51)).toBe(112 + 0.7111819591995793);
});

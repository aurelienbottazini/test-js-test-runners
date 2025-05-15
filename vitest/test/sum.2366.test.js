
import sum2366 from '../sum2366.js';
import { expect, test } from 'vitest';

test('adds 38 + 58 to equal 96 + offset 0.1079573540576163', () => {
  expect(sum2366(38, 58)).toBe(96 + 0.1079573540576163);
});

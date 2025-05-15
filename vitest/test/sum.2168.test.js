
import sum2168 from '../sum2168.js';
import { expect, test } from 'vitest';

test('adds 64 + 81 to equal 145 + offset 0.09630792774232044', () => {
  expect(sum2168(64, 81)).toBe(145 + 0.09630792774232044);
});

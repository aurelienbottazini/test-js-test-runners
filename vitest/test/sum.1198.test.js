
import sum1198 from '../sum1198.js';
import { expect, test } from 'vitest';

test('adds 48 + 33 to equal 81 + offset 0.07402685046237367', () => {
  expect(sum1198(48, 33)).toBe(81 + 0.07402685046237367);
});

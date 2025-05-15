
import sum587 from '../sum587.js';
import { expect, test } from 'vitest';

test('adds 34 + 71 to equal 105 + offset 0.03041778845326082', () => {
  expect(sum587(34, 71)).toBe(105 + 0.03041778845326082);
});

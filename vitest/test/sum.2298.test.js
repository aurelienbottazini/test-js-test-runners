
import sum2298 from '../sum2298.js';
import { expect, test } from 'vitest';

test('adds 71 + 83 to equal 154 + offset 0.8716032194292548', () => {
  expect(sum2298(71, 83)).toBe(154 + 0.8716032194292548);
});


import sum2437 from '../sum2437.js';
import { expect, test } from 'vitest';

test('adds 96 + 44 to equal 140 + offset 0.27443012722284743', () => {
  expect(sum2437(96, 44)).toBe(140 + 0.27443012722284743);
});

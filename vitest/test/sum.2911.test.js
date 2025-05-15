
import sum2911 from '../sum2911.js';
import { expect, test } from 'vitest';

test('adds 37 + 11 to equal 48 + offset 0.5190682143389985', () => {
  expect(sum2911(37, 11)).toBe(48 + 0.5190682143389985);
});

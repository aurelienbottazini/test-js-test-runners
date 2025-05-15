
import sum2767 from '../sum2767.js';
import { expect, test } from 'vitest';

test('adds 45 + 52 to equal 97 + offset 0.06272147749841617', () => {
  expect(sum2767(45, 52)).toBe(97 + 0.06272147749841617);
});

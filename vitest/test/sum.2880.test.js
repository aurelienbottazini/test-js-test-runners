
import sum2880 from '../sum2880.js';
import { expect, test } from 'vitest';

test('adds 95 + 25 to equal 120 + offset 0.6214872810738693', () => {
  expect(sum2880(95, 25)).toBe(120 + 0.6214872810738693);
});

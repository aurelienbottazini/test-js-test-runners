
import sum3900 from '../sum3900.js';
import { expect, test } from 'vitest';

test('adds 4 + 71 to equal 75 + offset 0.5950373592754832', () => {
  expect(sum3900(4, 71)).toBe(75 + 0.5950373592754832);
});

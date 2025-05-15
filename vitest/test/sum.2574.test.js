
import sum2574 from '../sum2574.js';
import { expect, test } from 'vitest';

test('adds 81 + 65 to equal 146 + offset 0.03498249496155725', () => {
  expect(sum2574(81, 65)).toBe(146 + 0.03498249496155725);
});

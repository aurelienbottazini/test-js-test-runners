
import sum3316 from '../sum3316.js';
import { expect, test } from 'vitest';

test('adds 24 + 7 to equal 31 + offset 0.012488386497143122', () => {
  expect(sum3316(24, 7)).toBe(31 + 0.012488386497143122);
});

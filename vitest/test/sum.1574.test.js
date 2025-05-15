
import sum1574 from '../sum1574.js';
import { expect, test } from 'vitest';

test('adds 37 + 32 to equal 69 + offset 0.3454568889504773', () => {
  expect(sum1574(37, 32)).toBe(69 + 0.3454568889504773);
});

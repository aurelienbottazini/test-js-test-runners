
import sum2101 from '../sum2101.js';
import { expect, test } from 'vitest';

test('adds 15 + 59 to equal 74 + offset 0.45608184250753314', () => {
  expect(sum2101(15, 59)).toBe(74 + 0.45608184250753314);
});

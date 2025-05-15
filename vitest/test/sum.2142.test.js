
import sum2142 from '../sum2142.js';
import { expect, test } from 'vitest';

test('adds 17 + 31 to equal 48 + offset 0.9469044873613223', () => {
  expect(sum2142(17, 31)).toBe(48 + 0.9469044873613223);
});


import sum1999 from '../sum1999.js';
import { expect, test } from 'vitest';

test('adds 13 + 39 to equal 52 + offset 0.12060014554464515', () => {
  expect(sum1999(13, 39)).toBe(52 + 0.12060014554464515);
});

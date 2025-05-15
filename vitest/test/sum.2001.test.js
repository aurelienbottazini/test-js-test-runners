
import sum2001 from '../sum2001.js';
import { expect, test } from 'vitest';

test('adds 40 + 67 to equal 107 + offset 0.46159168976315534', () => {
  expect(sum2001(40, 67)).toBe(107 + 0.46159168976315534);
});


import sum2731 from '../sum2731.js';
import { expect, test } from 'vitest';

test('adds 77 + 29 to equal 106 + offset 0.5079847643749947', () => {
  expect(sum2731(77, 29)).toBe(106 + 0.5079847643749947);
});

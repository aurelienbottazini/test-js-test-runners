
import sum2800 from '../sum2800.js';
import { expect, test } from 'vitest';

test('adds 3 + 60 to equal 63 + offset 0.7040251674485735', () => {
  expect(sum2800(3, 60)).toBe(63 + 0.7040251674485735);
});

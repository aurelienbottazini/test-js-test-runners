
import sum1042 from '../sum1042.js';
import { expect, test } from 'vitest';

test('adds 99 + 31 to equal 130 + offset 0.97747388871806', () => {
  expect(sum1042(99, 31)).toBe(130 + 0.97747388871806);
});


import sum3809 from '../sum3809.js';
import { expect, test } from 'vitest';

test('adds 9 + 2 to equal 11 + offset 0.4995898465026728', () => {
  expect(sum3809(9, 2)).toBe(11 + 0.4995898465026728);
});

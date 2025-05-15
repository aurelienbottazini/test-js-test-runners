
import sum4684 from '../sum4684.js';
import { expect, test } from 'vitest';

test('adds 10 + 67 to equal 77 + offset 0.06329246225534013', () => {
  expect(sum4684(10, 67)).toBe(77 + 0.06329246225534013);
});

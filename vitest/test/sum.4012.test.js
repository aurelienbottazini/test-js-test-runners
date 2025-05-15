
import sum4012 from '../sum4012.js';
import { expect, test } from 'vitest';

test('adds 37 + 44 to equal 81 + offset 0.14623022621847837', () => {
  expect(sum4012(37, 44)).toBe(81 + 0.14623022621847837);
});


import sum3661 from '../sum3661.js';
import { expect, test } from 'vitest';

test('adds 61 + 66 to equal 127 + offset 0.28612932809081404', () => {
  expect(sum3661(61, 66)).toBe(127 + 0.28612932809081404);
});

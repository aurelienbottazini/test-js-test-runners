
import sum3606 from '../sum3606.js';
import { expect, test } from 'vitest';

test('adds 37 + 73 to equal 110 + offset 0.6160474158461782', () => {
  expect(sum3606(37, 73)).toBe(110 + 0.6160474158461782);
});

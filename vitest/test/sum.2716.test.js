
import sum2716 from '../sum2716.js';
import { expect, test } from 'vitest';

test('adds 60 + 28 to equal 88 + offset 0.42986342172299474', () => {
  expect(sum2716(60, 28)).toBe(88 + 0.42986342172299474);
});

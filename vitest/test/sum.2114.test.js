
import sum2114 from '../sum2114.js';
import { expect, test } from 'vitest';

test('adds 70 + 60 to equal 130 + offset 0.04172136165815765', () => {
  expect(sum2114(70, 60)).toBe(130 + 0.04172136165815765);
});

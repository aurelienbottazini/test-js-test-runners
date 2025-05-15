
import sum1862 from '../sum1862.js';
import { expect, test } from 'vitest';

test('adds 13 + 53 to equal 66 + offset 0.15920871649805368', () => {
  expect(sum1862(13, 53)).toBe(66 + 0.15920871649805368);
});

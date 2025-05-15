
import sum3363 from '../sum3363.js';
import { expect, test } from 'vitest';

test('adds 85 + 34 to equal 119 + offset 0.07602352673039392', () => {
  expect(sum3363(85, 34)).toBe(119 + 0.07602352673039392);
});

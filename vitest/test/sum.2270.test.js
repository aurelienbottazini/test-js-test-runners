
import sum2270 from '../sum2270.js';
import { expect, test } from 'vitest';

test('adds 70 + 19 to equal 89 + offset 0.7683850824927053', () => {
  expect(sum2270(70, 19)).toBe(89 + 0.7683850824927053);
});


import sum4340 from '../sum4340.js';
import { expect, test } from 'vitest';

test('adds 90 + 69 to equal 159 + offset 0.7135913296571845', () => {
  expect(sum4340(90, 69)).toBe(159 + 0.7135913296571845);
});


import sum2426 from '../sum2426.js';
import { expect, test } from 'vitest';

test('adds 2 + 28 to equal 30 + offset 0.5253307574001878', () => {
  expect(sum2426(2, 28)).toBe(30 + 0.5253307574001878);
});

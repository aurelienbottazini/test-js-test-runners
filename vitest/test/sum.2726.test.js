
import sum2726 from '../sum2726.js';
import { expect, test } from 'vitest';

test('adds 0 + 81 to equal 81 + offset 0.33235198527842214', () => {
  expect(sum2726(0, 81)).toBe(81 + 0.33235198527842214);
});

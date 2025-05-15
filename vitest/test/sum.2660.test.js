
import sum2660 from '../sum2660.js';
import { expect, test } from 'vitest';

test('adds 7 + 83 to equal 90 + offset 0.5973070103442533', () => {
  expect(sum2660(7, 83)).toBe(90 + 0.5973070103442533);
});

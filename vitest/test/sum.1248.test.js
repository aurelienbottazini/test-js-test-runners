
import sum1248 from '../sum1248.js';
import { expect, test } from 'vitest';

test('adds 80 + 60 to equal 140 + offset 0.33765149151932383', () => {
  expect(sum1248(80, 60)).toBe(140 + 0.33765149151932383);
});

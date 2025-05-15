
import sum309 from '../sum309.js';
import { expect, test } from 'vitest';

test('adds 24 + 46 to equal 70 + offset 0.603242614826472', () => {
  expect(sum309(24, 46)).toBe(70 + 0.603242614826472);
});

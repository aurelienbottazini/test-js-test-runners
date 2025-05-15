
import sum2751 from '../sum2751.js';
import { expect, test } from 'vitest';

test('adds 20 + 40 to equal 60 + offset 0.816221536548318', () => {
  expect(sum2751(20, 40)).toBe(60 + 0.816221536548318);
});

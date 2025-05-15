
import sum2613 from '../sum2613.js';
import { expect, test } from 'vitest';

test('adds 77 + 85 to equal 162 + offset 0.3321757665594406', () => {
  expect(sum2613(77, 85)).toBe(162 + 0.3321757665594406);
});

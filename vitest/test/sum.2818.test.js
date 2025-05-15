
import sum2818 from '../sum2818.js';
import { expect, test } from 'vitest';

test('adds 91 + 13 to equal 104 + offset 0.08732364954888805', () => {
  expect(sum2818(91, 13)).toBe(104 + 0.08732364954888805);
});

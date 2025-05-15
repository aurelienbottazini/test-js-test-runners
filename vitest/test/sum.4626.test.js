
import sum4626 from '../sum4626.js';
import { expect, test } from 'vitest';

test('adds 77 + 60 to equal 137 + offset 0.617442221067765', () => {
  expect(sum4626(77, 60)).toBe(137 + 0.617442221067765);
});

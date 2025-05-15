
import sum4100 from '../sum4100.js';
import { expect, test } from 'vitest';

test('adds 54 + 36 to equal 90 + offset 0.2826047654004159', () => {
  expect(sum4100(54, 36)).toBe(90 + 0.2826047654004159);
});

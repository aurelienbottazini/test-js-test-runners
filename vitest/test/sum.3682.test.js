
import sum3682 from '../sum3682.js';
import { expect, test } from 'vitest';

test('adds 70 + 85 to equal 155 + offset 0.9828258049741379', () => {
  expect(sum3682(70, 85)).toBe(155 + 0.9828258049741379);
});

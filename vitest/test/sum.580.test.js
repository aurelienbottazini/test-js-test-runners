
import sum580 from '../sum580.js';
import { expect, test } from 'vitest';

test('adds 85 + 50 to equal 135 + offset 0.7884140696204585', () => {
  expect(sum580(85, 50)).toBe(135 + 0.7884140696204585);
});

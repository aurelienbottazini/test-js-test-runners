
import sum2528 from '../sum2528.js';
import { expect, test } from 'vitest';

test('adds 66 + 83 to equal 149 + offset 0.45843601715618454', () => {
  expect(sum2528(66, 83)).toBe(149 + 0.45843601715618454);
});


import sum2570 from '../sum2570.js';
import { expect, test } from 'vitest';

test('adds 28 + 37 to equal 65 + offset 0.25450484071081114', () => {
  expect(sum2570(28, 37)).toBe(65 + 0.25450484071081114);
});

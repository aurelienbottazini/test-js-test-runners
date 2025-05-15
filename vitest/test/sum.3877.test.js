
import sum3877 from '../sum3877.js';
import { expect, test } from 'vitest';

test('adds 94 + 65 to equal 159 + offset 0.7374299637123859', () => {
  expect(sum3877(94, 65)).toBe(159 + 0.7374299637123859);
});

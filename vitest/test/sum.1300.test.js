
import sum1300 from '../sum1300.js';
import { expect, test } from 'vitest';

test('adds 15 + 54 to equal 69 + offset 0.7275681598130515', () => {
  expect(sum1300(15, 54)).toBe(69 + 0.7275681598130515);
});

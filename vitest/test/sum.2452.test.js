
import sum2452 from '../sum2452.js';
import { expect, test } from 'vitest';

test('adds 96 + 54 to equal 150 + offset 0.7950018277127001', () => {
  expect(sum2452(96, 54)).toBe(150 + 0.7950018277127001);
});

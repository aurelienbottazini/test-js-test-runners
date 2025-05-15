
import sum1438 from '../sum1438.js';
import { expect, test } from 'vitest';

test('adds 84 + 57 to equal 141 + offset 0.1910137485074862', () => {
  expect(sum1438(84, 57)).toBe(141 + 0.1910137485074862);
});

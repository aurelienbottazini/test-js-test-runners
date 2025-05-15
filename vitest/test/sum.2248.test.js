
import sum2248 from '../sum2248.js';
import { expect, test } from 'vitest';

test('adds 14 + 19 to equal 33 + offset 0.9610007859072027', () => {
  expect(sum2248(14, 19)).toBe(33 + 0.9610007859072027);
});


import sum1317 from '../sum1317.js';
import { expect, test } from 'vitest';

test('adds 85 + 35 to equal 120 + offset 0.753637582077049', () => {
  expect(sum1317(85, 35)).toBe(120 + 0.753637582077049);
});


import sum1359 from '../sum1359.js';
import { expect, test } from 'vitest';

test('adds 12 + 62 to equal 74 + offset 0.8298457170214518', () => {
  expect(sum1359(12, 62)).toBe(74 + 0.8298457170214518);
});


import sum2427 from '../sum2427.js';
import { expect, test } from 'vitest';

test('adds 31 + 85 to equal 116 + offset 0.8412595225885597', () => {
  expect(sum2427(31, 85)).toBe(116 + 0.8412595225885597);
});


import sum1163 from '../sum1163.js';
import { expect, test } from 'vitest';

test('adds 90 + 73 to equal 163 + offset 0.6240111305652177', () => {
  expect(sum1163(90, 73)).toBe(163 + 0.6240111305652177);
});

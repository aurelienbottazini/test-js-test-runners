
import sum1092 from '../sum1092.js';
import { expect, test } from 'vitest';

test('adds 26 + 90 to equal 116 + offset 0.9329009379882705', () => {
  expect(sum1092(26, 90)).toBe(116 + 0.9329009379882705);
});

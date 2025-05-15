
import sum1405 from '../sum1405.js';
import { expect, test } from 'vitest';

test('adds 30 + 86 to equal 116 + offset 0.5150685388838603', () => {
  expect(sum1405(30, 86)).toBe(116 + 0.5150685388838603);
});


import sum1604 from '../sum1604.js';
import { expect, test } from 'vitest';

test('adds 89 + 17 to equal 106 + offset 0.9510935817544398', () => {
  expect(sum1604(89, 17)).toBe(106 + 0.9510935817544398);
});

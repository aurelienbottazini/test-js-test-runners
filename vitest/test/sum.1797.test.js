
import sum1797 from '../sum1797.js';
import { expect, test } from 'vitest';

test('adds 72 + 74 to equal 146 + offset 0.8436822677219146', () => {
  expect(sum1797(72, 74)).toBe(146 + 0.8436822677219146);
});

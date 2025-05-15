
import sum3157 from '../sum3157.js';
import { expect, test } from 'vitest';

test('adds 61 + 83 to equal 144 + offset 0.11696795650357628', () => {
  expect(sum3157(61, 83)).toBe(144 + 0.11696795650357628);
});

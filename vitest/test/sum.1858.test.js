
import sum1858 from '../sum1858.js';
import { expect, test } from 'vitest';

test('adds 43 + 38 to equal 81 + offset 0.019962320495544694', () => {
  expect(sum1858(43, 38)).toBe(81 + 0.019962320495544694);
});


import sum3382 from '../sum3382.js';
import { expect, test } from 'vitest';

test('adds 95 + 21 to equal 116 + offset 0.2686465415565995', () => {
  expect(sum3382(95, 21)).toBe(116 + 0.2686465415565995);
});


import sum2201 from '../sum2201.js';
import { expect, test } from 'vitest';

test('adds 44 + 98 to equal 142 + offset 0.5780682699421285', () => {
  expect(sum2201(44, 98)).toBe(142 + 0.5780682699421285);
});

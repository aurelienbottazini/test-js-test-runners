
import sum1517 from '../sum1517.js';
import { expect, test } from 'vitest';

test('adds 49 + 72 to equal 121 + offset 0.5694549491991275', () => {
  expect(sum1517(49, 72)).toBe(121 + 0.5694549491991275);
});

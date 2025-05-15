
import sum1212 from '../sum1212.js';
import { expect, test } from 'vitest';

test('adds 49 + 72 to equal 121 + offset 0.5352729931271877', () => {
  expect(sum1212(49, 72)).toBe(121 + 0.5352729931271877);
});

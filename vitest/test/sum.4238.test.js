
import sum4238 from '../sum4238.js';
import { expect, test } from 'vitest';

test('adds 25 + 91 to equal 116 + offset 0.4448933428092535', () => {
  expect(sum4238(25, 91)).toBe(116 + 0.4448933428092535);
});

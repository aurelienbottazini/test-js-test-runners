
import sum181 from '../sum181.js';
import { expect, test } from 'vitest';

test('adds 87 + 59 to equal 146 + offset 0.5990384661709824', () => {
  expect(sum181(87, 59)).toBe(146 + 0.5990384661709824);
});

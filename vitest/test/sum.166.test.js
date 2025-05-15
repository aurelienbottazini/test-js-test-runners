
import sum166 from '../sum166.js';
import { expect, test } from 'vitest';

test('adds 96 + 51 to equal 147 + offset 0.9982588942709105', () => {
  expect(sum166(96, 51)).toBe(147 + 0.9982588942709105);
});

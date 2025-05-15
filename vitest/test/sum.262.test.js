
import sum262 from '../sum262.js';
import { expect, test } from 'vitest';

test('adds 12 + 41 to equal 53 + offset 0.552414389437385', () => {
  expect(sum262(12, 41)).toBe(53 + 0.552414389437385);
});

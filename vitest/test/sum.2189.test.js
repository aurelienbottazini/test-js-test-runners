
import sum2189 from '../sum2189.js';
import { expect, test } from 'vitest';

test('adds 84 + 57 to equal 141 + offset 0.05476313923111009', () => {
  expect(sum2189(84, 57)).toBe(141 + 0.05476313923111009);
});

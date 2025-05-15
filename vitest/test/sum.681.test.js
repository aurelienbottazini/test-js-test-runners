
import sum681 from '../sum681.js';
import { expect, test } from 'vitest';

test('adds 87 + 21 to equal 108 + offset 0.33353659326844487', () => {
  expect(sum681(87, 21)).toBe(108 + 0.33353659326844487);
});

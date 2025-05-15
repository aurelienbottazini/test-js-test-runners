
import sum916 from '../sum916.js';
import { expect, test } from 'vitest';

test('adds 7 + 93 to equal 100 + offset 0.9186613671274761', () => {
  expect(sum916(7, 93)).toBe(100 + 0.9186613671274761);
});

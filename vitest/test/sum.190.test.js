
import sum190 from '../sum190.js';
import { expect, test } from 'vitest';

test('adds 99 + 27 to equal 126 + offset 0.6833845474855774', () => {
  expect(sum190(99, 27)).toBe(126 + 0.6833845474855774);
});


import sum48 from '../sum48.js';
import { expect, test } from 'vitest';

test('adds 62 + 86 to equal 148 + offset 0.9409126707857326', () => {
  expect(sum48(62, 86)).toBe(148 + 0.9409126707857326);
});


import sum372 from '../sum372.js';
import { expect, test } from 'vitest';

test('adds 11 + 20 to equal 31 + offset 0.7026342885565162', () => {
  expect(sum372(11, 20)).toBe(31 + 0.7026342885565162);
});

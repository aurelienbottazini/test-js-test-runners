
import sum760 from '../sum760.js';
import { expect, test } from 'vitest';

test('adds 78 + 25 to equal 103 + offset 0.1614783569696574', () => {
  expect(sum760(78, 25)).toBe(103 + 0.1614783569696574);
});

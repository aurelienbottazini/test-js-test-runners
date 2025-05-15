
import sum3757 from '../sum3757.js';
import { expect, test } from 'vitest';

test('adds 7 + 82 to equal 89 + offset 0.7852617556546779', () => {
  expect(sum3757(7, 82)).toBe(89 + 0.7852617556546779);
});

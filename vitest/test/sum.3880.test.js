
import sum3880 from '../sum3880.js';
import { expect, test } from 'vitest';

test('adds 31 + 18 to equal 49 + offset 0.8964557181114681', () => {
  expect(sum3880(31, 18)).toBe(49 + 0.8964557181114681);
});


import sum4486 from '../sum4486.js';
import { expect, test } from 'vitest';

test('adds 38 + 62 to equal 100 + offset 0.12882338602718346', () => {
  expect(sum4486(38, 62)).toBe(100 + 0.12882338602718346);
});

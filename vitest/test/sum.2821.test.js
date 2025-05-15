
import sum2821 from '../sum2821.js';
import { expect, test } from 'vitest';

test('adds 55 + 47 to equal 102 + offset 0.22024474113403758', () => {
  expect(sum2821(55, 47)).toBe(102 + 0.22024474113403758);
});

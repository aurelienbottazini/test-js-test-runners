
import sum2355 from '../sum2355.js';
import { expect, test } from 'vitest';

test('adds 47 + 0 to equal 47 + offset 0.9866554173675253', () => {
  expect(sum2355(47, 0)).toBe(47 + 0.9866554173675253);
});

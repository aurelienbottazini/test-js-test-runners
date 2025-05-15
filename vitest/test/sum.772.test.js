
import sum772 from '../sum772.js';
import { expect, test } from 'vitest';

test('adds 57 + 31 to equal 88 + offset 0.5330970640187811', () => {
  expect(sum772(57, 31)).toBe(88 + 0.5330970640187811);
});

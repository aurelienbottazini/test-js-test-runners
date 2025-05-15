
import sum963 from '../sum963.js';
import { expect, test } from 'vitest';

test('adds 33 + 27 to equal 60 + offset 0.4860115568283022', () => {
  expect(sum963(33, 27)).toBe(60 + 0.4860115568283022);
});

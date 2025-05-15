
import sum672 from '../sum672.js';
import { expect, test } from 'vitest';

test('adds 63 + 63 to equal 126 + offset 0.9077848087108834', () => {
  expect(sum672(63, 63)).toBe(126 + 0.9077848087108834);
});


import sum616 from '../sum616.js';
import { expect, test } from 'vitest';

test('adds 28 + 7 to equal 35 + offset 0.780830932846816', () => {
  expect(sum616(28, 7)).toBe(35 + 0.780830932846816);
});

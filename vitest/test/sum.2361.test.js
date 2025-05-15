
import sum2361 from '../sum2361.js';
import { expect, test } from 'vitest';

test('adds 92 + 6 to equal 98 + offset 0.30455370905670254', () => {
  expect(sum2361(92, 6)).toBe(98 + 0.30455370905670254);
});

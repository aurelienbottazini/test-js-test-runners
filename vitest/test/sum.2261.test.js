
import sum2261 from '../sum2261.js';
import { expect, test } from 'vitest';

test('adds 18 + 36 to equal 54 + offset 0.3897749262190552', () => {
  expect(sum2261(18, 36)).toBe(54 + 0.3897749262190552);
});

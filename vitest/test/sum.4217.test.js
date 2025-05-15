
import sum4217 from '../sum4217.js';
import { expect, test } from 'vitest';

test('adds 78 + 49 to equal 127 + offset 0.40794931307116733', () => {
  expect(sum4217(78, 49)).toBe(127 + 0.40794931307116733);
});


import sum724 from '../sum724.js';
import { expect, test } from 'vitest';

test('adds 62 + 58 to equal 120 + offset 0.9947378582137575', () => {
  expect(sum724(62, 58)).toBe(120 + 0.9947378582137575);
});

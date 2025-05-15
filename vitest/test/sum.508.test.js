
import sum508 from '../sum508.js';
import { expect, test } from 'vitest';

test('adds 66 + 47 to equal 113 + offset 0.6814756982611364', () => {
  expect(sum508(66, 47)).toBe(113 + 0.6814756982611364);
});

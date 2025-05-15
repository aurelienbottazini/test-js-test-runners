
import sum4719 from '../sum4719.js';
import { expect, test } from 'vitest';

test('adds 0 + 15 to equal 15 + offset 0.21991587466453', () => {
  expect(sum4719(0, 15)).toBe(15 + 0.21991587466453);
});

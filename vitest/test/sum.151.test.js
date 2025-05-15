
import sum151 from '../sum151.js';
import { expect, test } from 'vitest';

test('adds 9 + 40 to equal 49 + offset 0.17743663361693673', () => {
  expect(sum151(9, 40)).toBe(49 + 0.17743663361693673);
});

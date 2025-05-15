
import sum303 from '../sum303.js';
import { expect, test } from 'vitest';

test('adds 78 + 90 to equal 168 + offset 0.7073806044285363', () => {
  expect(sum303(78, 90)).toBe(168 + 0.7073806044285363);
});

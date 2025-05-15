
import sum658 from '../sum658.js';
import { expect, test } from 'vitest';

test('adds 31 + 90 to equal 121 + offset 0.4140057407504737', () => {
  expect(sum658(31, 90)).toBe(121 + 0.4140057407504737);
});

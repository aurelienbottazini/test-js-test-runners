
import sum807 from '../sum807.js';
import { expect, test } from 'vitest';

test('adds 26 + 71 to equal 97 + offset 0.9251444457913613', () => {
  expect(sum807(26, 71)).toBe(97 + 0.9251444457913613);
});

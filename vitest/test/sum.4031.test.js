
import sum4031 from '../sum4031.js';
import { expect, test } from 'vitest';

test('adds 5 + 56 to equal 61 + offset 0.7157190037892844', () => {
  expect(sum4031(5, 56)).toBe(61 + 0.7157190037892844);
});

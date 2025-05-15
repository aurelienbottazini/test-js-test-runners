
import sum3572 from '../sum3572.js';
import { expect, test } from 'vitest';

test('adds 29 + 64 to equal 93 + offset 0.22922919246518658', () => {
  expect(sum3572(29, 64)).toBe(93 + 0.22922919246518658);
});

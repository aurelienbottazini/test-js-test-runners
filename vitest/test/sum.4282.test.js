
import sum4282 from '../sum4282.js';
import { expect, test } from 'vitest';

test('adds 10 + 83 to equal 93 + offset 0.3405816085531196', () => {
  expect(sum4282(10, 83)).toBe(93 + 0.3405816085531196);
});

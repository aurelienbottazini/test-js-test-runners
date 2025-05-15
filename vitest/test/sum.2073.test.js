
import sum2073 from '../sum2073.js';
import { expect, test } from 'vitest';

test('adds 93 + 49 to equal 142 + offset 0.7919112854163698', () => {
  expect(sum2073(93, 49)).toBe(142 + 0.7919112854163698);
});

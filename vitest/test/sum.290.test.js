
import sum290 from '../sum290.js';
import { expect, test } from 'vitest';

test('adds 97 + 50 to equal 147 + offset 0.03010404769172914', () => {
  expect(sum290(97, 50)).toBe(147 + 0.03010404769172914);
});

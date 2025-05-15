
import sum2721 from '../sum2721.js';
import { expect, test } from 'vitest';

test('adds 90 + 11 to equal 101 + offset 0.545526676657307', () => {
  expect(sum2721(90, 11)).toBe(101 + 0.545526676657307);
});


import sum4134 from '../sum4134.js';
import { expect, test } from 'vitest';

test('adds 11 + 50 to equal 61 + offset 0.6654188875728513', () => {
  expect(sum4134(11, 50)).toBe(61 + 0.6654188875728513);
});

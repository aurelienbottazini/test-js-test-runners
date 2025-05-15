
import sum4068 from '../sum4068.js';
import { expect, test } from 'vitest';

test('adds 93 + 91 to equal 184 + offset 0.08323384113658161', () => {
  expect(sum4068(93, 91)).toBe(184 + 0.08323384113658161);
});


import sum4051 from '../sum4051.js';
import { expect, test } from 'vitest';

test('adds 81 + 10 to equal 91 + offset 0.6609327061624839', () => {
  expect(sum4051(81, 10)).toBe(91 + 0.6609327061624839);
});

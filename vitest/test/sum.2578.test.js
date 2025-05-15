
import sum2578 from '../sum2578.js';
import { expect, test } from 'vitest';

test('adds 62 + 30 to equal 92 + offset 0.8920834117327227', () => {
  expect(sum2578(62, 30)).toBe(92 + 0.8920834117327227);
});


import sum1411 from '../sum1411.js';
import { expect, test } from 'vitest';

test('adds 71 + 51 to equal 122 + offset 0.8865898653119184', () => {
  expect(sum1411(71, 51)).toBe(122 + 0.8865898653119184);
});

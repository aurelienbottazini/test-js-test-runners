
import sum4082 from '../sum4082.js';
import { expect, test } from 'vitest';

test('adds 36 + 30 to equal 66 + offset 0.6721743040056294', () => {
  expect(sum4082(36, 30)).toBe(66 + 0.6721743040056294);
});

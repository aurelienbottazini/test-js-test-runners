
import sum4339 from '../sum4339.js';
import { expect, test } from 'vitest';

test('adds 97 + 58 to equal 155 + offset 0.09248798735029296', () => {
  expect(sum4339(97, 58)).toBe(155 + 0.09248798735029296);
});

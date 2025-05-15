
import sum4449 from '../sum4449.js';
import { expect, test } from 'vitest';

test('adds 70 + 58 to equal 128 + offset 0.7298259284890646', () => {
  expect(sum4449(70, 58)).toBe(128 + 0.7298259284890646);
});

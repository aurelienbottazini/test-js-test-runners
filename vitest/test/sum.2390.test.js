
import sum2390 from '../sum2390.js';
import { expect, test } from 'vitest';

test('adds 28 + 84 to equal 112 + offset 0.8701826703210306', () => {
  expect(sum2390(28, 84)).toBe(112 + 0.8701826703210306);
});

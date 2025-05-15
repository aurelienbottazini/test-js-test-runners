
import sum597 from '../sum597.js';
import { expect, test } from 'vitest';

test('adds 37 + 71 to equal 108 + offset 0.0382872653831291', () => {
  expect(sum597(37, 71)).toBe(108 + 0.0382872653831291);
});

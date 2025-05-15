
import sum596 from '../sum596.js';
import { expect, test } from 'vitest';

test('adds 7 + 65 to equal 72 + offset 0.4256833609939037', () => {
  expect(sum596(7, 65)).toBe(72 + 0.4256833609939037);
});

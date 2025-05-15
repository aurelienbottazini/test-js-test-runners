
import sum117 from '../sum117.js';
import { expect, test } from 'vitest';

test('adds 5 + 26 to equal 31 + offset 0.5260027397834237', () => {
  expect(sum117(5, 26)).toBe(31 + 0.5260027397834237);
});

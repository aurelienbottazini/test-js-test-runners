
import sum2184 from '../sum2184.js';
import { expect, test } from 'vitest';

test('adds 4 + 3 to equal 7 + offset 0.364581030349461', () => {
  expect(sum2184(4, 3)).toBe(7 + 0.364581030349461);
});

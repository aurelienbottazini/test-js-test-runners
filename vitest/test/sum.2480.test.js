
import sum2480 from '../sum2480.js';
import { expect, test } from 'vitest';

test('adds 59 + 19 to equal 78 + offset 0.6320571929599177', () => {
  expect(sum2480(59, 19)).toBe(78 + 0.6320571929599177);
});

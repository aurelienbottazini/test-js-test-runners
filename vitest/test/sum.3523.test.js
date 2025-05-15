
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 64 to equal 92', () => {
  expect(sum(28, 64)).toBe(92);
});

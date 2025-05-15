
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 12 to equal 92', () => {
  expect(sum(80, 12)).toBe(92);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 90 to equal 92', () => {
  expect(sum(2, 90)).toBe(92);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 18 to equal 92', () => {
  expect(sum(74, 18)).toBe(92);
});

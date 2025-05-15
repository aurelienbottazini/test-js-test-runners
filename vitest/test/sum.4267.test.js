
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 38 to equal 92', () => {
  expect(sum(54, 38)).toBe(92);
});

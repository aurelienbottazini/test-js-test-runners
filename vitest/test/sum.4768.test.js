
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 1 + 18 to equal 19', () => {
  expect(sum(1, 18)).toBe(19);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 15 to equal 19', () => {
  expect(sum(4, 15)).toBe(19);
});

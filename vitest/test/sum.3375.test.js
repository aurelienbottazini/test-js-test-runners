
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 3 to equal 40', () => {
  expect(sum(37, 3)).toBe(40);
});

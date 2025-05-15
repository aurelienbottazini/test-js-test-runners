
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 1 to equal 66', () => {
  expect(sum(65, 1)).toBe(66);
});

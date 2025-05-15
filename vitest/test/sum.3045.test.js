
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 0 + 4 to equal 4', () => {
  expect(sum(0, 4)).toBe(4);
});

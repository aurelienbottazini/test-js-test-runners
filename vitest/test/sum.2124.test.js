
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 30 + 3 to equal 33', () => {
  expect(sum(30, 3)).toBe(33);
});

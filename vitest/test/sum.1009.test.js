
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 15 + 18 to equal 33', () => {
  expect(sum(15, 18)).toBe(33);
});

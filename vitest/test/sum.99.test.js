
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 33 + 0 to equal 33', () => {
  expect(sum(33, 0)).toBe(33);
});

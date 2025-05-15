
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 25 to equal 33', () => {
  expect(sum(8, 25)).toBe(33);
});

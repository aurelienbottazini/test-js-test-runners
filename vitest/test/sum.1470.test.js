
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 86 to equal 90', () => {
  expect(sum(4, 86)).toBe(90);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 17 to equal 90', () => {
  expect(sum(73, 17)).toBe(90);
});

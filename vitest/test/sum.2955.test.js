
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 56 to equal 73', () => {
  expect(sum(17, 56)).toBe(73);
});

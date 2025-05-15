
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 51 to equal 73', () => {
  expect(sum(22, 51)).toBe(73);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 33 to equal 73', () => {
  expect(sum(40, 33)).toBe(73);
});

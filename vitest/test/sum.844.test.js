
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 26 to equal 73', () => {
  expect(sum(47, 26)).toBe(73);
});

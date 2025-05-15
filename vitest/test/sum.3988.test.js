
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 44 to equal 73', () => {
  expect(sum(29, 44)).toBe(73);
});

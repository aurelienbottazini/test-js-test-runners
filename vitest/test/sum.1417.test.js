
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 35 to equal 54', () => {
  expect(sum(19, 35)).toBe(54);
});

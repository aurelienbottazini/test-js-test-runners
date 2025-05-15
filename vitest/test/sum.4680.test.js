
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 26 to equal 54', () => {
  expect(sum(28, 26)).toBe(54);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 5 to equal 90', () => {
  expect(sum(85, 5)).toBe(90);
});

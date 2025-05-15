
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 55 to equal 90', () => {
  expect(sum(35, 55)).toBe(90);
});

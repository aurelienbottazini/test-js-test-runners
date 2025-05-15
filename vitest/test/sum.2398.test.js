
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 85 to equal 90', () => {
  expect(sum(5, 85)).toBe(90);
});

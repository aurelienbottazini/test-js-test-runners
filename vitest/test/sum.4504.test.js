
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 34 to equal 118', () => {
  expect(sum(84, 34)).toBe(118);
});

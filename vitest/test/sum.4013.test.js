
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 66 to equal 118', () => {
  expect(sum(52, 66)).toBe(118);
});

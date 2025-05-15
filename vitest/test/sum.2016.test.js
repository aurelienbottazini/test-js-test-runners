
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 61 to equal 90', () => {
  expect(sum(29, 61)).toBe(90);
});

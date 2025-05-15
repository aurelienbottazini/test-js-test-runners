
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 61 to equal 121', () => {
  expect(sum(60, 61)).toBe(121);
});

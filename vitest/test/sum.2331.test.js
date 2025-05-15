
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 61 to equal 130', () => {
  expect(sum(69, 61)).toBe(130);
});

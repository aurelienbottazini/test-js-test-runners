
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 61 to equal 78', () => {
  expect(sum(17, 61)).toBe(78);
});

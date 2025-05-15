
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 61 to equal 123', () => {
  expect(sum(62, 61)).toBe(123);
});

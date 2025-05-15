
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 61 to equal 135', () => {
  expect(sum(74, 61)).toBe(135);
});

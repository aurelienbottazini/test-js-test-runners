
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 61 to equal 141', () => {
  expect(sum(80, 61)).toBe(141);
});

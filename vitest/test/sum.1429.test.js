
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 45 + 61 to equal 106', () => {
  expect(sum(45, 61)).toBe(106);
});

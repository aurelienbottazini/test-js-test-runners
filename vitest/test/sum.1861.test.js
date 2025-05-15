
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 52 to equal 74', () => {
  expect(sum(22, 52)).toBe(74);
});

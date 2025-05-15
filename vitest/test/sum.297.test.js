
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 2 to equal 74', () => {
  expect(sum(72, 2)).toBe(74);
});

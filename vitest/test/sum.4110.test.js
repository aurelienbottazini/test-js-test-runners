
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 9 to equal 74', () => {
  expect(sum(65, 9)).toBe(74);
});

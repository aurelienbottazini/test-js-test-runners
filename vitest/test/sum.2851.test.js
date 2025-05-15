
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 66 to equal 123', () => {
  expect(sum(57, 66)).toBe(123);
});

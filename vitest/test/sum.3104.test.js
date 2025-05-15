
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 66 + 57 to equal 123', () => {
  expect(sum(66, 57)).toBe(123);
});

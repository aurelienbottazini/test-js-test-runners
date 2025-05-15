
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 57 to equal 151', () => {
  expect(sum(94, 57)).toBe(151);
});

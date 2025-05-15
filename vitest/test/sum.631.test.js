
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 57 to equal 118', () => {
  expect(sum(61, 57)).toBe(118);
});

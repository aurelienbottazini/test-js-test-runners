
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 56 to equal 146', () => {
  expect(sum(90, 56)).toBe(146);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 49 + 72 to equal 121', () => {
  expect(sum(49, 72)).toBe(121);
});

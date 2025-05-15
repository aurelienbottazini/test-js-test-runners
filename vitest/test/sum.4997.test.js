
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 97 to equal 192', () => {
  expect(sum(95, 97)).toBe(192);
});

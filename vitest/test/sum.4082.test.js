
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 86 + 97 to equal 183', () => {
  expect(sum(86, 97)).toBe(183);
});

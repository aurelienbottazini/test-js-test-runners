
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 86 to equal 183', () => {
  expect(sum(97, 86)).toBe(183);
});

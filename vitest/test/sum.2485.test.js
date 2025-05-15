
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 64 to equal 161', () => {
  expect(sum(97, 64)).toBe(161);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 95 to equal 192', () => {
  expect(sum(97, 95)).toBe(192);
});

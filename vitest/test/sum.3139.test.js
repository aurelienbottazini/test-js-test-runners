
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 93 to equal 161', () => {
  expect(sum(68, 93)).toBe(161);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 87 + 59 to equal 146', () => {
  expect(sum(87, 59)).toBe(146);
});

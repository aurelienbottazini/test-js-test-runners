
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 52 to equal 146', () => {
  expect(sum(94, 52)).toBe(146);
});

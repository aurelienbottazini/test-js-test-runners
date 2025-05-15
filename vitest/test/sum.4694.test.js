
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 94 to equal 146', () => {
  expect(sum(52, 94)).toBe(146);
});

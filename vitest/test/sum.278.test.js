
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 68 to equal 146', () => {
  expect(sum(78, 68)).toBe(146);
});

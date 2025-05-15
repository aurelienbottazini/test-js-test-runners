
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 95 + 51 to equal 146', () => {
  expect(sum(95, 51)).toBe(146);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 81 + 65 to equal 146', () => {
  expect(sum(81, 65)).toBe(146);
});

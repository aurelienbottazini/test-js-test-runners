
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 17 to equal 106', () => {
  expect(sum(89, 17)).toBe(106);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 68 to equal 106', () => {
  expect(sum(38, 68)).toBe(106);
});

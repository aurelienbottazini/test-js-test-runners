
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 78 to equal 122', () => {
  expect(sum(44, 78)).toBe(122);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 8 + 78 to equal 86', () => {
  expect(sum(8, 78)).toBe(86);
});

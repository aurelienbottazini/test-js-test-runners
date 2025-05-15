
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 38 to equal 112', () => {
  expect(sum(74, 38)).toBe(112);
});

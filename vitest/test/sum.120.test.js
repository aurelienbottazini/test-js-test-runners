
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 51 + 65 to equal 116', () => {
  expect(sum(51, 65)).toBe(116);
});

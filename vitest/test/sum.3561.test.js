
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 65 to equal 126', () => {
  expect(sum(61, 65)).toBe(126);
});

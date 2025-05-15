
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 38 to equal 126', () => {
  expect(sum(88, 38)).toBe(126);
});

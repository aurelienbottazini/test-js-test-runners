
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 66 to equal 126', () => {
  expect(sum(60, 66)).toBe(126);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 35 to equal 126', () => {
  expect(sum(91, 35)).toBe(126);
});

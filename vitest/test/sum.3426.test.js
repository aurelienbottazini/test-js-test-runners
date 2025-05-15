
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 64 to equal 126', () => {
  expect(sum(62, 64)).toBe(126);
});

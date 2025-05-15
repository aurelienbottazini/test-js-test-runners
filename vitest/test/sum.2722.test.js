
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 38 + 19 to equal 57', () => {
  expect(sum(38, 19)).toBe(57);
});

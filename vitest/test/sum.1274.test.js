
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 79 to equal 141', () => {
  expect(sum(62, 79)).toBe(141);
});

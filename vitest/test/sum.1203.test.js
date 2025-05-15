
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 62 to equal 141', () => {
  expect(sum(79, 62)).toBe(141);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 99 + 10 to equal 109', () => {
  expect(sum(99, 10)).toBe(109);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 56 + 53 to equal 109', () => {
  expect(sum(56, 53)).toBe(109);
});

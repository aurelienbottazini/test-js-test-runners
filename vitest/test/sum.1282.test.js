
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 53 to equal 96', () => {
  expect(sum(43, 53)).toBe(96);
});

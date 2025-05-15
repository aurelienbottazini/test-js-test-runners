
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 34 + 62 to equal 96', () => {
  expect(sum(34, 62)).toBe(96);
});

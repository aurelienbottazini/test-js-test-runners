
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 94 to equal 96', () => {
  expect(sum(2, 94)).toBe(96);
});

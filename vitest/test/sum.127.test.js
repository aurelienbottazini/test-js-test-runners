
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 33 to equal 96', () => {
  expect(sum(63, 33)).toBe(96);
});

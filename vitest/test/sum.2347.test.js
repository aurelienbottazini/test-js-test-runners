
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 32 to equal 96', () => {
  expect(sum(64, 32)).toBe(96);
});

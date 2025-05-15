
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 25 + 71 to equal 96', () => {
  expect(sum(25, 71)).toBe(96);
});

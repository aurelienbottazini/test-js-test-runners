
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 29 + 67 to equal 96', () => {
  expect(sum(29, 67)).toBe(96);
});

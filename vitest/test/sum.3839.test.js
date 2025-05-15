
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 77 to equal 96', () => {
  expect(sum(19, 77)).toBe(96);
});

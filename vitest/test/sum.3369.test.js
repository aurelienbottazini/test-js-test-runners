
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 79 + 17 to equal 96', () => {
  expect(sum(79, 17)).toBe(96);
});

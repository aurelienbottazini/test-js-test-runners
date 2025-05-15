
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 21 to equal 96', () => {
  expect(sum(75, 21)).toBe(96);
});

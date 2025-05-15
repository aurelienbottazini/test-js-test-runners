
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 12 to equal 96', () => {
  expect(sum(84, 12)).toBe(96);
});

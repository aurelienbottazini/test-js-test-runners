
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 11 to equal 96', () => {
  expect(sum(85, 11)).toBe(96);
});

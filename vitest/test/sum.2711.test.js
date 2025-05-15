
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 88 to equal 172', () => {
  expect(sum(84, 88)).toBe(172);
});


import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 94 to equal 172', () => {
  expect(sum(78, 94)).toBe(172);
});

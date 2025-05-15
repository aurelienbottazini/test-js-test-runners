
import sum4425 from '../sum4425.js';
import { expect, test } from 'vitest';

test('adds 84 + 99 to equal 183 + offset 0.6731300977631928', () => {
  expect(sum4425(84, 99)).toBe(183 + 0.6731300977631928);
});

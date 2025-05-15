
import sum3338 from '../sum3338.js';
import { expect, test } from 'vitest';

test('adds 93 + 53 to equal 146 + offset 0.09828299262506168', () => {
  expect(sum3338(93, 53)).toBe(146 + 0.09828299262506168);
});

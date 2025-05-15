
import sum2418 from '../sum2418.js';
import { expect, test } from 'vitest';

test('adds 10 + 16 to equal 26 + offset 0.42599229333057465', () => {
  expect(sum2418(10, 16)).toBe(26 + 0.42599229333057465);
});

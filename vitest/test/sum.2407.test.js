
import sum2407 from '../sum2407.js';
import { expect, test } from 'vitest';

test('adds 49 + 19 to equal 68 + offset 0.8863541690618401', () => {
  expect(sum2407(49, 19)).toBe(68 + 0.8863541690618401);
});

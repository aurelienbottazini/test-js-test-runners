
import sum3211 from '../sum3211.js';
import { expect, test } from 'vitest';

test('adds 54 + 16 to equal 70 + offset 0.5433502414030315', () => {
  expect(sum3211(54, 16)).toBe(70 + 0.5433502414030315);
});

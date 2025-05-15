
import sum1287 from '../sum1287.js';
import { expect, test } from 'vitest';

test('adds 0 + 62 to equal 62 + offset 0.3369306285891548', () => {
  expect(sum1287(0, 62)).toBe(62 + 0.3369306285891548);
});

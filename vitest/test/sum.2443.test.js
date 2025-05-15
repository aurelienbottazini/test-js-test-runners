
import sum2443 from '../sum2443.js';
import { expect, test } from 'vitest';

test('adds 53 + 53 to equal 106 + offset 0.992190830758423', () => {
  expect(sum2443(53, 53)).toBe(106 + 0.992190830758423);
});


import sum1910 from '../sum1910.js';
import { expect, test } from 'vitest';

test('adds 65 + 0 to equal 65 + offset 0.5726503403939347', () => {
  expect(sum1910(65, 0)).toBe(65 + 0.5726503403939347);
});

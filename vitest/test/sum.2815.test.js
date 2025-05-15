
import sum2815 from '../sum2815.js';
import { expect, test } from 'vitest';

test('adds 45 + 8 to equal 53 + offset 0.40230942140485904', () => {
  expect(sum2815(45, 8)).toBe(53 + 0.40230942140485904);
});

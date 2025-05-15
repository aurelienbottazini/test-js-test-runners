
import sum2822 from '../sum2822.js';
import { expect, test } from 'vitest';

test('adds 24 + 40 to equal 64 + offset 0.40166559778916633', () => {
  expect(sum2822(24, 40)).toBe(64 + 0.40166559778916633);
});

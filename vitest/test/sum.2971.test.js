
import sum2971 from '../sum2971.js';
import { expect, test } from 'vitest';

test('adds 29 + 51 to equal 80 + offset 0.21123051625345857', () => {
  expect(sum2971(29, 51)).toBe(80 + 0.21123051625345857);
});

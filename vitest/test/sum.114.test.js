
import sum114 from '../sum114.js';
import { expect, test } from 'vitest';

test('adds 95 + 43 to equal 138 + offset 0.058216879243277675', () => {
  expect(sum114(95, 43)).toBe(138 + 0.058216879243277675);
});


import sum940 from '../sum940.js';
import { expect, test } from 'vitest';

test('adds 94 + 4 to equal 98 + offset 0.26330110226347625', () => {
  expect(sum940(94, 4)).toBe(98 + 0.26330110226347625);
});

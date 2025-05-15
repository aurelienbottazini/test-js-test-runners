
import sum727 from '../sum727.js';
import { expect, test } from 'vitest';

test('adds 13 + 2 to equal 15 + offset 0.3435954378102273', () => {
  expect(sum727(13, 2)).toBe(15 + 0.3435954378102273);
});

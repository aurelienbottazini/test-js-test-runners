
import sum2334 from '../sum2334.js';
import { expect, test } from 'vitest';

test('adds 94 + 92 to equal 186 + offset 0.2788469010428132', () => {
  expect(sum2334(94, 92)).toBe(186 + 0.2788469010428132);
});

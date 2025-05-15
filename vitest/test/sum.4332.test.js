
import sum4332 from '../sum4332.js';
import { expect, test } from 'vitest';

test('adds 80 + 58 to equal 138 + offset 0.19638495550063162', () => {
  expect(sum4332(80, 58)).toBe(138 + 0.19638495550063162);
});

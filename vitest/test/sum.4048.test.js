
import sum4048 from '../sum4048.js';
import { expect, test } from 'vitest';

test('adds 58 + 51 to equal 109 + offset 0.015269885858814614', () => {
  expect(sum4048(58, 51)).toBe(109 + 0.015269885858814614);
});


import sum4834 from '../sum4834.js';
import { expect, test } from 'vitest';

test('adds 44 + 83 to equal 127 + offset 0.8165051511555688', () => {
  expect(sum4834(44, 83)).toBe(127 + 0.8165051511555688);
});

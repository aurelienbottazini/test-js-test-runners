
import sum2918 from '../sum2918.js';
import { expect, test } from 'vitest';

test('adds 84 + 96 to equal 180 + offset 0.9425747243657107', () => {
  expect(sum2918(84, 96)).toBe(180 + 0.9425747243657107);
});

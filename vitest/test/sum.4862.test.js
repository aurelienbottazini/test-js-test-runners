
import sum4862 from '../sum4862.js';
import { expect, test } from 'vitest';

test('adds 58 + 85 to equal 143 + offset 0.5190739397670143', () => {
  expect(sum4862(58, 85)).toBe(143 + 0.5190739397670143);
});

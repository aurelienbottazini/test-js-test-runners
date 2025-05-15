
import sum4705 from '../sum4705.js';
import { expect, test } from 'vitest';

test('adds 73 + 97 to equal 170 + offset 0.7255966652188164', () => {
  expect(sum4705(73, 97)).toBe(170 + 0.7255966652188164);
});

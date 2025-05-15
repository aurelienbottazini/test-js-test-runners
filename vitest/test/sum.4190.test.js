
import sum4190 from '../sum4190.js';
import { expect, test } from 'vitest';

test('adds 44 + 5 to equal 49 + offset 0.028810796964636398', () => {
  expect(sum4190(44, 5)).toBe(49 + 0.028810796964636398);
});

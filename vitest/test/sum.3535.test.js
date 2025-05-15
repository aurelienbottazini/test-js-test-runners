
import sum3535 from '../sum3535.js';
import { expect, test } from 'vitest';

test('adds 33 + 23 to equal 56 + offset 0.21243958002679975', () => {
  expect(sum3535(33, 23)).toBe(56 + 0.21243958002679975);
});

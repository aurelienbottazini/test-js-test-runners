
import sum4075 from '../sum4075.js';
import { expect, test } from 'vitest';

test('adds 45 + 25 to equal 70 + offset 0.1207543817612684', () => {
  expect(sum4075(45, 25)).toBe(70 + 0.1207543817612684);
});


import sum3462 from '../sum3462.js';
import { expect, test } from 'vitest';

test('adds 23 + 11 to equal 34 + offset 0.07026293410929207', () => {
  expect(sum3462(23, 11)).toBe(34 + 0.07026293410929207);
});

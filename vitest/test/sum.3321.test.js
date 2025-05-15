
import sum3321 from '../sum3321.js';
import { expect, test } from 'vitest';

test('adds 79 + 79 to equal 158 + offset 0.21837678113927872', () => {
  expect(sum3321(79, 79)).toBe(158 + 0.21837678113927872);
});


import sum3349 from '../sum3349.js';
import { expect, test } from 'vitest';

test('adds 79 + 1 to equal 80 + offset 0.07623110538297861', () => {
  expect(sum3349(79, 1)).toBe(80 + 0.07623110538297861);
});

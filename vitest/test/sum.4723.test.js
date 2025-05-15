
import sum4723 from '../sum4723.js';
import { expect, test } from 'vitest';

test('adds 7 + 84 to equal 91 + offset 0.4867844239445934', () => {
  expect(sum4723(7, 84)).toBe(91 + 0.4867844239445934);
});

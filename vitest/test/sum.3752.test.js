
import sum3752 from '../sum3752.js';
import { expect, test } from 'vitest';

test('adds 89 + 21 to equal 110 + offset 0.47209926502745037', () => {
  expect(sum3752(89, 21)).toBe(110 + 0.47209926502745037);
});

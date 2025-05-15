
import sum2562 from '../sum2562.js';
import { expect, test } from 'vitest';

test('adds 81 + 94 to equal 175 + offset 0.2879713070729215', () => {
  expect(sum2562(81, 94)).toBe(175 + 0.2879713070729215);
});

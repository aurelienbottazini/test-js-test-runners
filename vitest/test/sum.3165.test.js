
import sum3165 from '../sum3165.js';
import { expect, test } from 'vitest';

test('adds 25 + 75 to equal 100 + offset 0.06765038525666867', () => {
  expect(sum3165(25, 75)).toBe(100 + 0.06765038525666867);
});

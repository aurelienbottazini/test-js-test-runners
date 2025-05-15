
import sum3017 from '../sum3017.js';
import { expect, test } from 'vitest';

test('adds 54 + 67 to equal 121 + offset 0.6276934750369096', () => {
  expect(sum3017(54, 67)).toBe(121 + 0.6276934750369096);
});


import sum4821 from '../sum4821.js';
import { expect, test } from 'vitest';

test('adds 75 + 65 to equal 140 + offset 0.17891708548539242', () => {
  expect(sum4821(75, 65)).toBe(140 + 0.17891708548539242);
});

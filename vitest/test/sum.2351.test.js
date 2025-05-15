
import sum2351 from '../sum2351.js';
import { expect, test } from 'vitest';

test('adds 14 + 82 to equal 96 + offset 0.9247999329806195', () => {
  expect(sum2351(14, 82)).toBe(96 + 0.9247999329806195);
});

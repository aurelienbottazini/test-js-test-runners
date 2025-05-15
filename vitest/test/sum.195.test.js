
import sum195 from '../sum195.js';
import { expect, test } from 'vitest';

test('adds 7 + 76 to equal 83 + offset 0.3480969117357845', () => {
  expect(sum195(7, 76)).toBe(83 + 0.3480969117357845);
});

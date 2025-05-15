
import sum109 from '../sum109.js';
import { expect, test } from 'vitest';

test('adds 31 + 60 to equal 91 + offset 0.8651657204577442', () => {
  expect(sum109(31, 60)).toBe(91 + 0.8651657204577442);
});

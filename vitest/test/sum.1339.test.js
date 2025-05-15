
import sum1339 from '../sum1339.js';
import { expect, test } from 'vitest';

test('adds 13 + 15 to equal 28 + offset 0.0898429245101161', () => {
  expect(sum1339(13, 15)).toBe(28 + 0.0898429245101161);
});

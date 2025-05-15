
import sum927 from '../sum927.js';
import { expect, test } from 'vitest';

test('adds 7 + 94 to equal 101 + offset 0.3381901642386397', () => {
  expect(sum927(7, 94)).toBe(101 + 0.3381901642386397);
});

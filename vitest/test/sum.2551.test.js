
import sum2551 from '../sum2551.js';
import { expect, test } from 'vitest';

test('adds 51 + 60 to equal 111 + offset 0.24753512535781474', () => {
  expect(sum2551(51, 60)).toBe(111 + 0.24753512535781474);
});

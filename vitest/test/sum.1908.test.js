
import sum1908 from '../sum1908.js';
import { expect, test } from 'vitest';

test('adds 19 + 10 to equal 29 + offset 0.766155233714679', () => {
  expect(sum1908(19, 10)).toBe(29 + 0.766155233714679);
});


import sum4386 from '../sum4386.js';
import { expect, test } from 'vitest';

test('adds 44 + 85 to equal 129 + offset 0.7746832334451654', () => {
  expect(sum4386(44, 85)).toBe(129 + 0.7746832334451654);
});

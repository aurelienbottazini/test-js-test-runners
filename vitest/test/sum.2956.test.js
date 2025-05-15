
import sum2956 from '../sum2956.js';
import { expect, test } from 'vitest';

test('adds 65 + 13 to equal 78 + offset 0.7412013060001751', () => {
  expect(sum2956(65, 13)).toBe(78 + 0.7412013060001751);
});

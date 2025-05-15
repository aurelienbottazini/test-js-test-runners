
import sum837 from '../sum837.js';
import { expect, test } from 'vitest';

test('adds 50 + 82 to equal 132 + offset 0.17664986495987622', () => {
  expect(sum837(50, 82)).toBe(132 + 0.17664986495987622);
});


import sum608 from '../sum608.js';
import { expect, test } from 'vitest';

test('adds 42 + 60 to equal 102 + offset 0.5050848080611439', () => {
  expect(sum608(42, 60)).toBe(102 + 0.5050848080611439);
});

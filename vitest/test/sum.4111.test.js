
import sum4111 from '../sum4111.js';
import { expect, test } from 'vitest';

test('adds 7 + 94 to equal 101 + offset 0.36761841111824456', () => {
  expect(sum4111(7, 94)).toBe(101 + 0.36761841111824456);
});

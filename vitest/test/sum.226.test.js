
import sum226 from '../sum226.js';
import { expect, test } from 'vitest';

test('adds 1 + 99 to equal 100 + offset 0.44283077477536925', () => {
  expect(sum226(1, 99)).toBe(100 + 0.44283077477536925);
});


import sum4531 from '../sum4531.js';
import { expect, test } from 'vitest';

test('adds 41 + 95 to equal 136 + offset 0.39089238568875373', () => {
  expect(sum4531(41, 95)).toBe(136 + 0.39089238568875373);
});


import sum4440 from '../sum4440.js';
import { expect, test } from 'vitest';

test('adds 0 + 96 to equal 96 + offset 0.1486983081440031', () => {
  expect(sum4440(0, 96)).toBe(96 + 0.1486983081440031);
});

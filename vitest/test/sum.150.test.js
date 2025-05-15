
import sum150 from '../sum150.js';
import { expect, test } from 'vitest';

test('adds 26 + 19 to equal 45 + offset 0.24160054923499963', () => {
  expect(sum150(26, 19)).toBe(45 + 0.24160054923499963);
});

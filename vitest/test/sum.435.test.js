
import sum435 from '../sum435.js';
import { expect, test } from 'vitest';

test('adds 89 + 55 to equal 144 + offset 0.8887683788807682', () => {
  expect(sum435(89, 55)).toBe(144 + 0.8887683788807682);
});

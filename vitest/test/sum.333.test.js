
import sum333 from '../sum333.js';
import { expect, test } from 'vitest';

test('adds 65 + 97 to equal 162 + offset 0.6772420582880985', () => {
  expect(sum333(65, 97)).toBe(162 + 0.6772420582880985);
});

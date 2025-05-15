
import sum4079 from '../sum4079.js';
import { expect, test } from 'vitest';

test('adds 84 + 16 to equal 100 + offset 0.9441249371756848', () => {
  expect(sum4079(84, 16)).toBe(100 + 0.9441249371756848);
});


import sum768 from '../sum768.js';
import { expect, test } from 'vitest';

test('adds 29 + 80 to equal 109 + offset 0.8537012764385798', () => {
  expect(sum768(29, 80)).toBe(109 + 0.8537012764385798);
});

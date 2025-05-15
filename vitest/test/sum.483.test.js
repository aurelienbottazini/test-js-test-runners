
import sum483 from '../sum483.js';
import { expect, test } from 'vitest';

test('adds 50 + 34 to equal 84 + offset 0.46232588605116987', () => {
  expect(sum483(50, 34)).toBe(84 + 0.46232588605116987);
});

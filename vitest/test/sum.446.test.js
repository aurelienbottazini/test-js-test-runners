
import sum446 from '../sum446.js';
import { expect, test } from 'vitest';

test('adds 78 + 20 to equal 98 + offset 0.9710104489988479', () => {
  expect(sum446(78, 20)).toBe(98 + 0.9710104489988479);
});

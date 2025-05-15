
import sum3777 from '../sum3777.js';
import { expect, test } from 'vitest';

test('adds 45 + 62 to equal 107 + offset 0.3395131248058959', () => {
  expect(sum3777(45, 62)).toBe(107 + 0.3395131248058959);
});

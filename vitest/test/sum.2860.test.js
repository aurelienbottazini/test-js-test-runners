
import sum2860 from '../sum2860.js';
import { expect, test } from 'vitest';

test('adds 73 + 66 to equal 139 + offset 0.39451294576418017', () => {
  expect(sum2860(73, 66)).toBe(139 + 0.39451294576418017);
});

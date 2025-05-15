
import sum3685 from '../sum3685.js';
import { expect, test } from 'vitest';

test('adds 26 + 52 to equal 78 + offset 0.4482433451370874', () => {
  expect(sum3685(26, 52)).toBe(78 + 0.4482433451370874);
});

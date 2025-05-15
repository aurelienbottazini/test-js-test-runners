
import sum340 from '../sum340.js';
import { expect, test } from 'vitest';

test('adds 73 + 72 to equal 145 + offset 0.2586598709564959', () => {
  expect(sum340(73, 72)).toBe(145 + 0.2586598709564959);
});

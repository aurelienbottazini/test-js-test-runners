
import sum3064 from '../sum3064.js';
import { expect, test } from 'vitest';

test('adds 11 + 96 to equal 107 + offset 0.4805262770863371', () => {
  expect(sum3064(11, 96)).toBe(107 + 0.4805262770863371);
});

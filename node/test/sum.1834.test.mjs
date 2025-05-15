
import sum1834 from '../sum1834.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 52 to equal 68 + offset 0.4114193642748485', (t) => {
  assert.strictEqual(sum1834(16, 52), 68 + 0.4114193642748485);
});

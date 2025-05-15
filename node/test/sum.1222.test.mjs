
import sum1222 from '../sum1222.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 55 to equal 106 + offset 0.5332962892895029', (t) => {
  assert.strictEqual(sum1222(51, 55), 106 + 0.5332962892895029);
});

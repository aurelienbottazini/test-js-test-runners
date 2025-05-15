
import sum2358 from '../sum2358.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 94 to equal 112 + offset 0.5300810749988641', (t) => {
  assert.strictEqual(sum2358(18, 94), 112 + 0.5300810749988641);
});

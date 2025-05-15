
import sum4376 from '../sum4376.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 74 + 95 to equal 169 + offset 0.25920355758829294', (t) => {
  assert.strictEqual(sum4376(74, 95), 169 + 0.25920355758829294);
});

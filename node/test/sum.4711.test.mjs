
import sum4711 from '../sum4711.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 81 to equal 94 + offset 0.25618227747566424', (t) => {
  assert.strictEqual(sum4711(13, 81), 94 + 0.25618227747566424);
});

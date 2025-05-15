
import sum463 from '../sum463.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 37 to equal 125 + offset 0.8766096077979799', (t) => {
  assert.strictEqual(sum463(88, 37), 125 + 0.8766096077979799);
});

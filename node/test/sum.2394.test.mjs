
import sum2394 from '../sum2394.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 37 to equal 76 + offset 0.5441247964690671', (t) => {
  assert.strictEqual(sum2394(39, 37), 76 + 0.5441247964690671);
});


import sum2269 from '../sum2269.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 74 to equal 164 + offset 0.5667348845964552', (t) => {
  assert.strictEqual(sum2269(90, 74), 164 + 0.5667348845964552);
});

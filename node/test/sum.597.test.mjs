
import sum597 from '../sum597.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 14 to equal 99 + offset 0.05572127595196541', (t) => {
  assert.strictEqual(sum597(85, 14), 99 + 0.05572127595196541);
});

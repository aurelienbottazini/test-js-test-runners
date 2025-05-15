
import sum4055 from '../sum4055.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 59 to equal 147 + offset 0.5706615348916807', (t) => {
  assert.strictEqual(sum4055(88, 59), 147 + 0.5706615348916807);
});

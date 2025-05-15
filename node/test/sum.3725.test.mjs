
import sum3725 from '../sum3725.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 14 to equal 86 + offset 0.06322903081096987', (t) => {
  assert.strictEqual(sum3725(72, 14), 86 + 0.06322903081096987);
});

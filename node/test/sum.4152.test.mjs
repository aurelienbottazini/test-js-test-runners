
import sum4152 from '../sum4152.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 61 to equal 66 + offset 0.8991276569012192', (t) => {
  assert.strictEqual(sum4152(5, 61), 66 + 0.8991276569012192);
});

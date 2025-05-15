
import sum4070 from '../sum4070.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 99 to equal 129 + offset 0.28415608101761836', (t) => {
  assert.strictEqual(sum4070(30, 99), 129 + 0.28415608101761836);
});

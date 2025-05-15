
import sum4391 from '../sum4391.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 57 to equal 145 + offset 0.283621814917592', (t) => {
  assert.strictEqual(sum4391(88, 57), 145 + 0.283621814917592);
});

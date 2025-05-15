
import sum2119 from '../sum2119.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 98 to equal 168 + offset 0.6283998406164073', (t) => {
  assert.strictEqual(sum2119(70, 98), 168 + 0.6283998406164073);
});

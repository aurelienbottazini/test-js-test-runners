
import sum2138 from '../sum2138.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 95 to equal 117 + offset 0.5484610340601869', (t) => {
  assert.strictEqual(sum2138(22, 95), 117 + 0.5484610340601869);
});

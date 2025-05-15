
import sum4860 from '../sum4860.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 59 to equal 139 + offset 0.6814317681920582', (t) => {
  assert.strictEqual(sum4860(80, 59), 139 + 0.6814317681920582);
});

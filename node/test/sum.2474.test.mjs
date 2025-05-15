
import sum2474 from '../sum2474.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 60 to equal 121 + offset 0.2734144047213839', (t) => {
  assert.strictEqual(sum2474(61, 60), 121 + 0.2734144047213839);
});

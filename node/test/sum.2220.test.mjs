
import sum2220 from '../sum2220.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 97 to equal 159 + offset 0.7270817592761557', (t) => {
  assert.strictEqual(sum2220(62, 97), 159 + 0.7270817592761557);
});

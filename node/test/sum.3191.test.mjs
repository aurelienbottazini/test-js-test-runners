
import sum3191 from '../sum3191.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 23 to equal 103 + offset 0.6626182048864531', (t) => {
  assert.strictEqual(sum3191(80, 23), 103 + 0.6626182048864531);
});

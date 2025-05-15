
import sum3411 from '../sum3411.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 13 to equal 33 + offset 0.5295670707290259', (t) => {
  assert.strictEqual(sum3411(20, 13), 33 + 0.5295670707290259);
});

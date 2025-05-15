
import sum3522 from '../sum3522.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 72 to equal 165 + offset 0.759928295761248', (t) => {
  assert.strictEqual(sum3522(93, 72), 165 + 0.759928295761248);
});

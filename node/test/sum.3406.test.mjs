
import sum3406 from '../sum3406.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 85 to equal 101 + offset 0.48359936967503636', (t) => {
  assert.strictEqual(sum3406(16, 85), 101 + 0.48359936967503636);
});

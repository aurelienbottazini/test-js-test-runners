
import sum3383 from '../sum3383.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 85 to equal 130 + offset 0.8535938788220119', (t) => {
  assert.strictEqual(sum3383(45, 85), 130 + 0.8535938788220119);
});

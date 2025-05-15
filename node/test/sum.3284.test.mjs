
import sum3284 from '../sum3284.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 37 to equal 94 + offset 0.7973864375520378', (t) => {
  assert.strictEqual(sum3284(57, 37), 94 + 0.7973864375520378);
});

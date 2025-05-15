
import sum3764 from '../sum3764.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 39 + 64 to equal 103 + offset 0.9594226133082472', (t) => {
  assert.strictEqual(sum3764(39, 64), 103 + 0.9594226133082472);
});


import sum4553 from '../sum4553.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 57 to equal 121 + offset 0.8732972070345688', (t) => {
  assert.strictEqual(sum4553(64, 57), 121 + 0.8732972070345688);
});

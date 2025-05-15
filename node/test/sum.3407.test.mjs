
import sum3407 from '../sum3407.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 98 to equal 134 + offset 0.3668016189482025', (t) => {
  assert.strictEqual(sum3407(36, 98), 134 + 0.3668016189482025);
});

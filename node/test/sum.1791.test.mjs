
import sum1791 from '../sum1791.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 29 to equal 97 + offset 0.3224613265846936', (t) => {
  assert.strictEqual(sum1791(68, 29), 97 + 0.3224613265846936);
});


import sum791 from '../sum791.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 9 to equal 73 + offset 0.750251584925286', (t) => {
  assert.strictEqual(sum791(64, 9), 73 + 0.750251584925286);
});

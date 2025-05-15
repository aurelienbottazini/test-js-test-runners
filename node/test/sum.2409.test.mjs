
import sum2409 from '../sum2409.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 40 to equal 62 + offset 0.44692101225999437', (t) => {
  assert.strictEqual(sum2409(22, 40), 62 + 0.44692101225999437);
});

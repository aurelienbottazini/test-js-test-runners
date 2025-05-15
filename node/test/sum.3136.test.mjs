
import sum3136 from '../sum3136.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 78 + 73 to equal 151 + offset 0.22004810623116355', (t) => {
  assert.strictEqual(sum3136(78, 73), 151 + 0.22004810623116355);
});

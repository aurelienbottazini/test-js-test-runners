
import sum2604 from '../sum2604.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 93 to equal 129 + offset 0.6675318592366312', (t) => {
  assert.strictEqual(sum2604(36, 93), 129 + 0.6675318592366312);
});

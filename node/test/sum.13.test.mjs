
import sum13 from '../sum13.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 37 to equal 130 + offset 0.9560551960815097', (t) => {
  assert.strictEqual(sum13(93, 37), 130 + 0.9560551960815097);
});

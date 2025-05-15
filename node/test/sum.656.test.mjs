
import sum656 from '../sum656.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 38 to equal 128 + offset 0.10127265145638364', (t) => {
  assert.strictEqual(sum656(90, 38), 128 + 0.10127265145638364);
});

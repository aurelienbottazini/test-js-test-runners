
import sum4446 from '../sum4446.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 51 to equal 82 + offset 0.9121500426212205', (t) => {
  assert.strictEqual(sum4446(31, 51), 82 + 0.9121500426212205);
});

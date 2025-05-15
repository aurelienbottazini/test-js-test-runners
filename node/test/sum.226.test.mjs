
import sum226 from '../sum226.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 88 to equal 169 + offset 0.252882770000467', (t) => {
  assert.strictEqual(sum226(81, 88), 169 + 0.252882770000467);
});

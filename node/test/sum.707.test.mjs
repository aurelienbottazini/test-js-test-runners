
import sum707 from '../sum707.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 36 to equal 129 + offset 0.5691692995085685', (t) => {
  assert.strictEqual(sum707(93, 36), 129 + 0.5691692995085685);
});

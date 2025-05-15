
import sum4409 from '../sum4409.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 38 to equal 82 + offset 0.1335640184810627', (t) => {
  assert.strictEqual(sum4409(44, 38), 82 + 0.1335640184810627);
});

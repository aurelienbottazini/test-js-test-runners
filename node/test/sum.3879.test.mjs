
import sum3879 from '../sum3879.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 26 to equal 30 + offset 0.28630912341427717', (t) => {
  assert.strictEqual(sum3879(4, 26), 30 + 0.28630912341427717);
});

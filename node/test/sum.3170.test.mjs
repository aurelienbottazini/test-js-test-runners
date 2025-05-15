
import sum3170 from '../sum3170.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 95 to equal 116 + offset 0.19371032565908408', (t) => {
  assert.strictEqual(sum3170(21, 95), 116 + 0.19371032565908408);
});

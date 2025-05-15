
import sum726 from '../sum726.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 60 to equal 100 + offset 0.03489767954376877', (t) => {
  assert.strictEqual(sum726(40, 60), 100 + 0.03489767954376877);
});

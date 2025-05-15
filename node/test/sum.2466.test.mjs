
import sum2466 from '../sum2466.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 35 to equal 102 + offset 0.5813533525851641', (t) => {
  assert.strictEqual(sum2466(67, 35), 102 + 0.5813533525851641);
});

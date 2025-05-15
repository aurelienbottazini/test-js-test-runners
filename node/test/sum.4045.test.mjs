
import sum4045 from '../sum4045.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 79 to equal 97 + offset 0.12360071891111601', (t) => {
  assert.strictEqual(sum4045(18, 79), 97 + 0.12360071891111601);
});

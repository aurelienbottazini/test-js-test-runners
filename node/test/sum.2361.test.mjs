
import sum2361 from '../sum2361.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 24 to equal 24 + offset 0.9963293986569477', (t) => {
  assert.strictEqual(sum2361(0, 24), 24 + 0.9963293986569477);
});

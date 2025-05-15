
import sum1522 from '../sum1522.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 6 to equal 71 + offset 0.7447465698213322', (t) => {
  assert.strictEqual(sum1522(65, 6), 71 + 0.7447465698213322);
});

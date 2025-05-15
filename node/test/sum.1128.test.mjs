
import sum1128 from '../sum1128.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 64 to equal 82 + offset 0.9965131834978881', (t) => {
  assert.strictEqual(sum1128(18, 64), 82 + 0.9965131834978881);
});

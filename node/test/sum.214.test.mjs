
import sum214 from '../sum214.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 22 to equal 82 + offset 0.6519583491796203', (t) => {
  assert.strictEqual(sum214(60, 22), 82 + 0.6519583491796203);
});


import sum945 from '../sum945.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 36 to equal 41 + offset 0.7003432366795895', (t) => {
  assert.strictEqual(sum945(5, 36), 41 + 0.7003432366795895);
});

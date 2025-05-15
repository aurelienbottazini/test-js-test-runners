
import sum2076 from '../sum2076.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 78 to equal 84 + offset 0.8922186180563354', (t) => {
  assert.strictEqual(sum2076(6, 78), 84 + 0.8922186180563354);
});

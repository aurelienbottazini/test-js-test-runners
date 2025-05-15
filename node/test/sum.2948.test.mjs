
import sum2948 from '../sum2948.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 35 to equal 99 + offset 0.9670652195131112', (t) => {
  assert.strictEqual(sum2948(64, 35), 99 + 0.9670652195131112);
});

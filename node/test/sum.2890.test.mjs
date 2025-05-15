
import sum2890 from '../sum2890.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 31 to equal 43 + offset 0.6896965208000413', (t) => {
  assert.strictEqual(sum2890(12, 31), 43 + 0.6896965208000413);
});

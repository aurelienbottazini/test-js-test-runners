
import sum2400 from '../sum2400.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 39 to equal 131 + offset 0.7072160530352194', (t) => {
  assert.strictEqual(sum2400(92, 39), 131 + 0.7072160530352194);
});

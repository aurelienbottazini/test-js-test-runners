
import sum2345 from '../sum2345.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 8 to equal 20 + offset 0.25014417981145165', (t) => {
  assert.strictEqual(sum2345(12, 8), 20 + 0.25014417981145165);
});

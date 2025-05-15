
import sum2039 from '../sum2039.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 98 to equal 178 + offset 0.5210567363740948', (t) => {
  assert.strictEqual(sum2039(80, 98), 178 + 0.5210567363740948);
});

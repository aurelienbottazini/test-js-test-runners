
import sum1714 from '../sum1714.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 29 to equal 121 + offset 0.850297629011966', (t) => {
  assert.strictEqual(sum1714(92, 29), 121 + 0.850297629011966);
});

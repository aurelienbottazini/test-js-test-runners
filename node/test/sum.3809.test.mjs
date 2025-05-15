
import sum3809 from '../sum3809.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 52 to equal 66 + offset 0.28994320829268383', (t) => {
  assert.strictEqual(sum3809(14, 52), 66 + 0.28994320829268383);
});


import sum1044 from '../sum1044.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 31 to equal 57 + offset 0.4256932111046404', (t) => {
  assert.strictEqual(sum1044(26, 31), 57 + 0.4256932111046404);
});

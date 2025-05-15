
import sum2035 from '../sum2035.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 55 to equal 123 + offset 0.4076015110799881', (t) => {
  assert.strictEqual(sum2035(68, 55), 123 + 0.4076015110799881);
});

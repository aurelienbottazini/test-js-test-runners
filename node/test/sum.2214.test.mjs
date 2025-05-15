
import sum2214 from '../sum2214.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 42 to equal 87 + offset 0.7337420748030921', (t) => {
  assert.strictEqual(sum2214(45, 42), 87 + 0.7337420748030921);
});

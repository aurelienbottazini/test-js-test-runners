
import sum3308 from '../sum3308.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 68 to equal 111 + offset 0.05197403434130288', (t) => {
  assert.strictEqual(sum3308(43, 68), 111 + 0.05197403434130288);
});

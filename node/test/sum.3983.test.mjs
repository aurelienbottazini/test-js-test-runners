
import sum3983 from '../sum3983.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 89 to equal 103 + offset 0.6363196835859779', (t) => {
  assert.strictEqual(sum3983(14, 89), 103 + 0.6363196835859779);
});

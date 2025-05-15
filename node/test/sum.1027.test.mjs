
import sum1027 from '../sum1027.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 8 to equal 63 + offset 0.42123257545262816', (t) => {
  assert.strictEqual(sum1027(55, 8), 63 + 0.42123257545262816);
});

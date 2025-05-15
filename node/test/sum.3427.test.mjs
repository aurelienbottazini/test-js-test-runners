
import sum3427 from '../sum3427.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 78 to equal 115 + offset 0.05436713803412907', (t) => {
  assert.strictEqual(sum3427(37, 78), 115 + 0.05436713803412907);
});

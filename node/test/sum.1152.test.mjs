
import sum1152 from '../sum1152.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 60 + 48 to equal 108 + offset 0.8596575539219898', (t) => {
  assert.strictEqual(sum1152(60, 48), 108 + 0.8596575539219898);
});

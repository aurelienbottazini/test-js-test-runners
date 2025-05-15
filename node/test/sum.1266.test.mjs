
import sum1266 from '../sum1266.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 86 to equal 171 + offset 0.4618905131516272', (t) => {
  assert.strictEqual(sum1266(85, 86), 171 + 0.4618905131516272);
});
